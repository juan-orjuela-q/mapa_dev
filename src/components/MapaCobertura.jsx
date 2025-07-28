import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { provincias, cantones, distritos } from '../data/costaRicaData';
import './MapaCobertura.css';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 10.0,
  lng: -84.0
};

const mapOptions = {
  mapTypeId: 'hybrid',
  mapTypeControl: true,
  streetViewControl: false,
  fullscreenControl: true,
  zoomControl: true
};

const MapaCobertura = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [selectedCanton, setSelectedCanton] = useState('');
  const [selectedDistrito, setSelectedDistrito] = useState('');
  const [availableCantones, setAvailableCantones] = useState([]);
  const [availableDistritos, setAvailableDistritos] = useState([]);
  const geocoder = useRef(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
    
    // Inicializar geocoder
    if (window.google) {
      geocoder.current = new window.google.maps.Geocoder();
    }

    // Cargar archivo KML
    loadKmlLayer(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const loadKmlLayer = (mapInstance) => {
    if (window.google && mapInstance) {
      const kml = new window.google.maps.KmlLayer({
        url: `${window.location.origin}/cobertura.kmz?v=${Date.now()}`,
        map: mapInstance,
        preserveViewport: false,
        suppressInfoWindows: false
      });

      kml.addListener('status_changed', () => {
        console.log('KML Status:', kml.getStatus());
      });
    }
  };

  const geocodeAndZoom = (address, zoomLevel) => {
    if (!geocoder.current || !map) return;

    geocoder.current.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(zoomLevel);
      } else {
        console.error('Geocoding failed:', status);
        alert('Localización no encontrada: ' + status);
      }
    });
  };

  const handleProvinciaChange = (e) => {
    const provinciaId = e.target.value;
    setSelectedProvincia(provinciaId);
    setSelectedCanton('');
    setSelectedDistrito('');
    
    if (provinciaId) {
      const provincia = provincias.find(p => p.id === parseInt(provinciaId));
      setAvailableCantones(cantones[provinciaId] || []);
      setAvailableDistritos([]);
      
      if (provincia) {
        geocodeAndZoom(`COSTA RICA, ${provincia.nombre}`, 10);
      }
    } else {
      setAvailableCantones([]);
      setAvailableDistritos([]);
      if (map) {
        map.setCenter(center);
        map.setZoom(8);
      }
    }
  };

  const handleCantonChange = (e) => {
    const cantonId = e.target.value;
    setSelectedCanton(cantonId);
    setSelectedDistrito('');
    
    if (cantonId) {
      const provincia = provincias.find(p => p.id === parseInt(selectedProvincia));
      const canton = cantones[selectedProvincia]?.find(c => c.id === parseInt(cantonId));
      setAvailableDistritos(distritos[cantonId] || []);
      
      if (provincia && canton) {
        geocodeAndZoom(`COSTA RICA, ${provincia.nombre}, ${canton.nombre}`, 12);
      }
    } else {
      setAvailableDistritos([]);
    }
  };

  const handleDistritoChange = (e) => {
    const distritoId = e.target.value;
    setSelectedDistrito(distritoId);
    
    if (distritoId) {
      const provincia = provincias.find(p => p.id === parseInt(selectedProvincia));
      const canton = cantones[selectedProvincia]?.find(c => c.id === parseInt(selectedCanton));
      const distrito = distritos[selectedCanton]?.find(d => d.id === parseInt(distritoId));
      
      if (provincia && canton && distrito) {
        geocodeAndZoom(`COSTA RICA, ${provincia.nombre}, ${canton.nombre}, ${distrito.nombre}`, 14);
      }
    }
  };

  const handleLimpiar = () => {
    setSelectedProvincia('');
    setSelectedCanton('');
    setSelectedDistrito('');
    setAvailableCantones([]);
    setAvailableDistritos([]);
    
    if (map) {
      map.setCenter(center);
      map.setZoom(8);
    }
  };

  return isLoaded ? (
    <div className="mapa-container">
      <div className="header">
        <img src="/logo-ifx--primary.svg" alt="Logo" className="logo" />
      </div>
      
      <div className="controls-container">
        <h2>Mapa de Cobertura de Costa Rica</h2>
        
        <div className="controls-grid">
          <div className="control-group">
            <label htmlFor="provincia">Provincia:</label>
            <select 
              id="provincia"
              value={selectedProvincia} 
              onChange={handleProvinciaChange}
              className="select-control"
            >
              <option value="">Seleccione una provincia</option>
              {provincias.map(provincia => (
                <option key={provincia.id} value={provincia.id}>
                  {provincia.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="canton">Cantón:</label>
            <select 
              id="canton"
              value={selectedCanton} 
              onChange={handleCantonChange}
              disabled={!selectedProvincia}
              className="select-control"
            >
              <option value="">Seleccione un cantón</option>
              {availableCantones.map(canton => (
                <option key={canton.id} value={canton.id}>
                  {canton.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="distrito">Distrito:</label>
            <select 
              id="distrito"
              value={selectedDistrito} 
              onChange={handleDistritoChange}
              disabled={!selectedCanton}
              className="select-control"
            >
              <option value="">Seleccione un distrito</option>
              {availableDistritos.map(distrito => (
                <option key={distrito.id} value={distrito.id}>
                  {distrito.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <button 
              onClick={handleLimpiar}
              className="btn-limpiar"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={mapOptions}
        >
        </GoogleMap>
      </div>
    </div>
  ) : <div className="loading">Cargando mapa...</div>;
};

export default MapaCobertura;
