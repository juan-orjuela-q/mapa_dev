// Datos geográficos completos de Costa Rica
export const provincias = [
  { id: 1, nombre: "San José" },
  { id: 2, nombre: "Alajuela" },
  { id: 3, nombre: "Cartago" },
  { id: 4, nombre: "Heredia" },
  { id: 5, nombre: "Guanacaste" },
  { id: 6, nombre: "Puntarenas" },
  { id: 7, nombre: "Limón" }
];

export const cantones = {
  1: [ // San José
    { id: 101, nombre: "San José" },
    { id: 102, nombre: "Escazú" },
    { id: 103, nombre: "Desamparados" },
    { id: 104, nombre: "Puriscal" },
    { id: 105, nombre: "Tarrazú" },
    { id: 106, nombre: "Aserrí" },
    { id: 107, nombre: "Mora" },
    { id: 108, nombre: "Goicoechea" },
    { id: 109, nombre: "Santa Ana" },
    { id: 110, nombre: "Alajuelita" },
    { id: 111, nombre: "Vásquez de Coronado" },
    { id: 112, nombre: "Acosta" },
    { id: 113, nombre: "Tibás" },
    { id: 114, nombre: "Moravia" },
    { id: 115, nombre: "Montes de Oca" },
    { id: 116, nombre: "Turrubares" },
    { id: 117, nombre: "Dota" },
    { id: 118, nombre: "Curridabat" },
    { id: 119, nombre: "Pérez Zeledón" },
    { id: 120, nombre: "León Cortés Castro" }
  ],
  2: [ // Alajuela
    { id: 201, nombre: "Alajuela" },
    { id: 202, nombre: "San Ramón" },
    { id: 203, nombre: "Grecia" },
    { id: 204, nombre: "San Mateo" },
    { id: 205, nombre: "Atenas" },
    { id: 206, nombre: "Naranjo" },
    { id: 207, nombre: "Palmares" },
    { id: 208, nombre: "Poás" },
    { id: 209, nombre: "Orotina" },
    { id: 210, nombre: "San Carlos" },
    { id: 211, nombre: "Zarcero" },
    { id: 212, nombre: "Valverde Vega" },
    { id: 213, nombre: "Upala" },
    { id: 214, nombre: "Los Chiles" },
    { id: 215, nombre: "Guatuso" }
  ],
  3: [ // Cartago
    { id: 301, nombre: "Cartago" },
    { id: 302, nombre: "Paraíso" },
    { id: 303, nombre: "La Unión" },
    { id: 304, nombre: "Jiménez" },
    { id: 305, nombre: "Turrialba" },
    { id: 306, nombre: "Alvarado" },
    { id: 307, nombre: "Oreamuno" },
    { id: 308, nombre: "El Guarco" }
  ],
  4: [ // Heredia
    { id: 401, nombre: "Heredia" },
    { id: 402, nombre: "Barva" },
    { id: 403, nombre: "Santo Domingo" },
    { id: 404, nombre: "Santa Bárbara" },
    { id: 405, nombre: "San Rafael" },
    { id: 406, nombre: "San Isidro" },
    { id: 407, nombre: "Belén" },
    { id: 408, nombre: "Flores" },
    { id: 409, nombre: "San Pablo" },
    { id: 410, nombre: "Sarapiquí" }
  ],
  5: [ // Guanacaste
    { id: 501, nombre: "Liberia" },
    { id: 502, nombre: "Nicoya" },
    { id: 503, nombre: "Santa Cruz" },
    { id: 504, nombre: "Bagaces" },
    { id: 505, nombre: "Carrillo" },
    { id: 506, nombre: "Cañas" },
    { id: 507, nombre: "Abangares" },
    { id: 508, nombre: "Tilarán" },
    { id: 509, nombre: "Nandayure" },
    { id: 510, nombre: "La Cruz" },
    { id: 511, nombre: "Hojancha" }
  ],
  6: [ // Puntarenas
    { id: 601, nombre: "Puntarenas" },
    { id: 602, nombre: "Esparza" },
    { id: 603, nombre: "Buenos Aires" },
    { id: 604, nombre: "Montes de Oro" },
    { id: 605, nombre: "Osa" },
    { id: 606, nombre: "Quepos" },
    { id: 607, nombre: "Golfito" },
    { id: 608, nombre: "Coto Brus" },
    { id: 609, nombre: "Parrita" },
    { id: 610, nombre: "Corredores" },
    { id: 611, nombre: "Garabito" }
  ],
  7: [ // Limón
    { id: 701, nombre: "Limón" },
    { id: 702, nombre: "Pococí" },
    { id: 703, nombre: "Siquirres" },
    { id: 704, nombre: "Talamanca" },
    { id: 705, nombre: "Matina" },
    { id: 706, nombre: "Guácimo" }
  ]
};

export const distritos = {
  // SAN JOSÉ - CANTONES Y DISTRITOS
  // San José (101)
  101: [
    { id: 10101, nombre: "Carmen" },
    { id: 10102, nombre: "Merced" },
    { id: 10103, nombre: "Hospital" },
    { id: 10104, nombre: "Catedral" },
    { id: 10105, nombre: "Zapote" },
    { id: 10106, nombre: "San Francisco de Dos Ríos" },
    { id: 10107, nombre: "La Uruca" },
    { id: 10108, nombre: "Mata Redonda" },
    { id: 10109, nombre: "Pavas" },
    { id: 10110, nombre: "Hatillo" },
    { id: 10111, nombre: "San Sebastián" }
  ],
  // Escazú (102)
  102: [
    { id: 10201, nombre: "Escazú" },
    { id: 10202, nombre: "San Antonio" },
    { id: 10203, nombre: "San Rafael" }
  ],
  // Desamparados (103)
  103: [
    { id: 10301, nombre: "Desamparados" },
    { id: 10302, nombre: "San Miguel" },
    { id: 10303, nombre: "San Juan de Dios" },
    { id: 10304, nombre: "San Rafael Arriba" },
    { id: 10305, nombre: "San Antonio" },
    { id: 10306, nombre: "Frailes" },
    { id: 10307, nombre: "Patarrá" },
    { id: 10308, nombre: "San Cristóbal" },
    { id: 10309, nombre: "Rosario" },
    { id: 10310, nombre: "Damas" },
    { id: 10311, nombre: "San Rafael Abajo" },
    { id: 10312, nombre: "Gravilias" },
    { id: 10313, nombre: "Los Guido" }
  ],
  // Puriscal (104)
  104: [
    { id: 10401, nombre: "Santiago" },
    { id: 10402, nombre: "Mercedes Sur" },
    { id: 10403, nombre: "Barbacoas" },
    { id: 10404, nombre: "Grifo Alto" },
    { id: 10405, nombre: "San Rafael" },
    { id: 10406, nombre: "Candelarita" },
    { id: 10407, nombre: "Desamparaditos" },
    { id: 10408, nombre: "San Antonio" },
    { id: 10409, nombre: "Chires" }
  ],
  // Tarrazú (105)
  105: [
    { id: 10501, nombre: "San Marcos" },
    { id: 10502, nombre: "San Lorenzo" },
    { id: 10503, nombre: "San Carlos" }
  ],
  // Aserrí (106)
  106: [
    { id: 10601, nombre: "Aserrí" },
    { id: 10602, nombre: "Tarbaca" },
    { id: 10603, nombre: "Vuelta de Jorco" },
    { id: 10604, nombre: "San Gabriel" },
    { id: 10605, nombre: "Legua" },
    { id: 10606, nombre: "Monterrey" },
    { id: 10607, nombre: "Salitrillos" }
  ],
  // Mora (107)
  107: [
    { id: 10701, nombre: "Colón" },
    { id: 10702, nombre: "Guayabo" },
    { id: 10703, nombre: "Tabarcia" },
    { id: 10704, nombre: "Piedras Negras" },
    { id: 10705, nombre: "Picagres" },
    { id: 10706, nombre: "Jaris" }
  ],
  // Goicoechea (108)
  108: [
    { id: 10801, nombre: "Guadalupe" },
    { id: 10802, nombre: "San Francisco" },
    { id: 10803, nombre: "Calle Blancos" },
    { id: 10804, nombre: "Mata de Plátano" },
    { id: 10805, nombre: "Ipís" },
    { id: 10806, nombre: "Rancho Redondo" },
    { id: 10807, nombre: "Purral" }
  ],
  // Santa Ana (109)
  109: [
    { id: 10901, nombre: "Santa Ana" },
    { id: 10902, nombre: "Salitral" },
    { id: 10903, nombre: "Pozos" },
    { id: 10904, nombre: "Uruca" },
    { id: 10905, nombre: "Piedades" },
    { id: 10906, nombre: "Brasil" }
  ],
  // Alajuelita (110)
  110: [
    { id: 11001, nombre: "Alajuelita" },
    { id: 11002, nombre: "San Josecito" },
    { id: 11003, nombre: "San Antonio" },
    { id: 11004, nombre: "Concepción" },
    { id: 11005, nombre: "San Felipe" }
  ],
  // Vásquez de Coronado (111)
  111: [
    { id: 11101, nombre: "San Isidro" },
    { id: 11102, nombre: "San Rafael" },
    { id: 11103, nombre: "Dulce Nombre de Jesús" },
    { id: 11104, nombre: "Patalillo" },
    { id: 11105, nombre: "Cascajal" }
  ],
  // Acosta (112)
  112: [
    { id: 11201, nombre: "San Ignacio" },
    { id: 11202, nombre: "Guaitil" },
    { id: 11203, nombre: "Palmichal" },
    { id: 11204, nombre: "Cangrejal" },
    { id: 11205, nombre: "Sabanillas" }
  ],
  // Tibás (113)
  113: [
    { id: 11301, nombre: "San Juan" },
    { id: 11302, nombre: "Cinco Esquinas" },
    { id: 11303, nombre: "Anselmo Llorente" },
    { id: 11304, nombre: "León XIII" },
    { id: 11305, nombre: "Colima" }
  ],
  // Moravia (114)
  114: [
    { id: 11401, nombre: "San Vicente" },
    { id: 11402, nombre: "San Jerónimo" },
    { id: 11403, nombre: "La Trinidad" }
  ],
  // Montes de Oca (115)
  115: [
    { id: 11501, nombre: "San Pedro" },
    { id: 11502, nombre: "Sabanilla" },
    { id: 11503, nombre: "Mercedes" },
    { id: 11504, nombre: "San Rafael" }
  ],
  // Turrubares (116)
  116: [
    { id: 11601, nombre: "San Pablo" },
    { id: 11602, nombre: "San Pedro" },
    { id: 11603, nombre: "San Juan de Mata" },
    { id: 11604, nombre: "San Luis" },
    { id: 11605, nombre: "Carara" }
  ],
  // Dota (117)
  117: [
    { id: 11701, nombre: "Santa María" },
    { id: 11702, nombre: "Jardín" },
    { id: 11703, nombre: "Copey" }
  ],
  // Curridabat (118)
  118: [
    { id: 11801, nombre: "Curridabat" },
    { id: 11802, nombre: "Granadilla" },
    { id: 11803, nombre: "Sánchez" },
    { id: 11804, nombre: "Tirrases" }
  ],
  // Pérez Zeledón (119)
  119: [
    { id: 11901, nombre: "San Isidro de El General" },
    { id: 11902, nombre: "El General" },
    { id: 11903, nombre: "Daniel Flores" },
    { id: 11904, nombre: "Rivas" },
    { id: 11905, nombre: "San Pedro" },
    { id: 11906, nombre: "Platanares" },
    { id: 11907, nombre: "Pejibaye" },
    { id: 11908, nombre: "Cajón" },
    { id: 11909, nombre: "Barú" },
    { id: 11910, nombre: "Río Nuevo" },
    { id: 11911, nombre: "Páramo" }
  ],
  // León Cortés Castro (120)
  120: [
    { id: 12001, nombre: "San Pablo" },
    { id: 12002, nombre: "San Andrés" },
    { id: 12003, nombre: "Llano Bonito" },
    { id: 12004, nombre: "San Isidro" },
    { id: 12005, nombre: "Santa Cruz" },
    { id: 12006, nombre: "San Antonio" }
  ],

  // ALAJUELA - CANTONES Y DISTRITOS
  // Alajuela (201)
  201: [
    { id: 20101, nombre: "Alajuela" },
    { id: 20102, nombre: "San José" },
    { id: 20103, nombre: "Carrizal" },
    { id: 20104, nombre: "San Antonio" },
    { id: 20105, nombre: "Guácima" },
    { id: 20106, nombre: "San Isidro" },
    { id: 20107, nombre: "Sabanilla" },
    { id: 20108, nombre: "San Rafael" },
    { id: 20109, nombre: "Río Segundo" },
    { id: 20110, nombre: "Desamparados" },
    { id: 20111, nombre: "Turrúcares" },
    { id: 20112, nombre: "Tambor" },
    { id: 20113, nombre: "Garita" },
    { id: 20114, nombre: "Sarapiquí" }
  ],
  // San Ramón (202)
  202: [
    { id: 20201, nombre: "San Ramón" },
    { id: 20202, nombre: "Santiago" },
    { id: 20203, nombre: "San Juan" },
    { id: 20204, nombre: "Piedades Norte" },
    { id: 20205, nombre: "Piedades Sur" },
    { id: 20206, nombre: "San Rafael" },
    { id: 20207, nombre: "San Isidro" },
    { id: 20208, nombre: "Ángeles" },
    { id: 20209, nombre: "Alfaro" },
    { id: 20210, nombre: "Volio" },
    { id: 20211, nombre: "Concepción" },
    { id: 20212, nombre: "Zapotal" },
    { id: 20213, nombre: "Peñas Blancas" }
  ],
  // Grecia (203)
  203: [
    { id: 20301, nombre: "Grecia" },
    { id: 20302, nombre: "San Isidro" },
    { id: 20303, nombre: "San José" },
    { id: 20304, nombre: "San Roque" },
    { id: 20305, nombre: "Tacares" },
    { id: 20306, nombre: "Río Cuarto" },
    { id: 20307, nombre: "Puente de Piedra" },
    { id: 20308, nombre: "Bolívar" }
  ],
  // San Mateo (204)
  204: [
    { id: 20401, nombre: "San Mateo" },
    { id: 20402, nombre: "Desmonte" },
    { id: 20403, nombre: "Jesús María" }
  ],
  // Atenas (205)
  205: [
    { id: 20501, nombre: "Atenas" },
    { id: 20502, nombre: "Jesús" },
    { id: 20503, nombre: "Mercedes" },
    { id: 20504, nombre: "San Isidro" },
    { id: 20505, nombre: "Concepción" },
    { id: 20506, nombre: "San José" },
    { id: 20507, nombre: "Santa Eulalia" },
    { id: 20508, nombre: "Escobal" }
  ],
  // Naranjo (206)
  206: [
    { id: 20601, nombre: "Naranjo" },
    { id: 20602, nombre: "San Miguel" },
    { id: 20603, nombre: "San José" },
    { id: 20604, nombre: "Cirrí Sur" },
    { id: 20605, nombre: "San Jerónimo" },
    { id: 20606, nombre: "San Juan" },
    { id: 20607, nombre: "El Rosario" },
    { id: 20608, nombre: "Palmitos" }
  ],
  // Palmares (207)
  207: [
    { id: 20701, nombre: "Palmares" },
    { id: 20702, nombre: "Zaragoza" },
    { id: 20703, nombre: "Buenos Aires" },
    { id: 20704, nombre: "Santiago" },
    { id: 20705, nombre: "Candelaria" },
    { id: 20706, nombre: "Esquipulas" },
    { id: 20707, nombre: "La Granja" }
  ],
  // Poás (208)
  208: [
    { id: 20801, nombre: "San Pedro" },
    { id: 20802, nombre: "San Juan" },
    { id: 20803, nombre: "San Rafael" },
    { id: 20804, nombre: "Carrillos" },
    { id: 20805, nombre: "Sabana Redonda" }
  ],
  // Orotina (209)
  209: [
    { id: 20901, nombre: "Orotina" },
    { id: 20902, nombre: "El Mastate" },
    { id: 20903, nombre: "Hacienda Vieja" },
    { id: 20904, nombre: "Coyolar" },
    { id: 20905, nombre: "La Ceiba" }
  ],
  // San Carlos (210)
  210: [
    { id: 21001, nombre: "Quesada" },
    { id: 21002, nombre: "Florencia" },
    { id: 21003, nombre: "Buenavista" },
    { id: 21004, nombre: "Aguas Zarcas" },
    { id: 21005, nombre: "Venecia" },
    { id: 21006, nombre: "Pital" },
    { id: 21007, nombre: "La Fortuna" },
    { id: 21008, nombre: "La Tigra" },
    { id: 21009, nombre: "La Palmera" },
    { id: 21010, nombre: "Venado" },
    { id: 21011, nombre: "Cutris" },
    { id: 21012, nombre: "Monterrey" },
    { id: 21013, nombre: "Pocosol" }
  ],
  // Zarcero (211)
  211: [
    { id: 21101, nombre: "Zarcero" },
    { id: 21102, nombre: "Laguna" },
    { id: 21103, nombre: "Tapesco" },
    { id: 21104, nombre: "Guadalupe" },
    { id: 21105, nombre: "Palmira" },
    { id: 21106, nombre: "Zapote" },
    { id: 21107, nombre: "Brisas" }
  ],
  // Valverde Vega (212)
  212: [
    { id: 21201, nombre: "Sarchí Norte" },
    { id: 21202, nombre: "Sarchí Sur" },
    { id: 21203, nombre: "Toro Amarillo" },
    { id: 21204, nombre: "San Pedro" },
    { id: 21205, nombre: "Rodríguez" }
  ],
  // Upala (213)
  213: [
    { id: 21301, nombre: "Upala" },
    { id: 21302, nombre: "Aguas Claras" },
    { id: 21303, nombre: "San José" },
    { id: 21304, nombre: "Bijagua" },
    { id: 21305, nombre: "Delicias" },
    { id: 21306, nombre: "Dos Ríos" },
    { id: 21307, nombre: "Yolillal" }
  ],
  // Los Chiles (214)
  214: [
    { id: 21401, nombre: "Los Chiles" },
    { id: 21402, nombre: "Caño Negro" },
    { id: 21403, nombre: "El Amparo" },
    { id: 21404, nombre: "San Jorge" }
  ],
  // Guatuso (215)
  215: [
    { id: 21501, nombre: "San Rafael" },
    { id: 21502, nombre: "Buenavista" },
    { id: 21503, nombre: "Cote" },
    { id: 21504, nombre: "Katira" }
  ],

  // CARTAGO - CANTONES Y DISTRITOS
  // Cartago (301)
  301: [
    { id: 30101, nombre: "Oriental" },
    { id: 30102, nombre: "Occidental" },
    { id: 30103, nombre: "Carmen" },
    { id: 30104, nombre: "San Nicolás" },
    { id: 30105, nombre: "Aguacaliente" },
    { id: 30106, nombre: "Guadalupe" },
    { id: 30107, nombre: "Corralillo" },
    { id: 30108, nombre: "Tierra Blanca" },
    { id: 30109, nombre: "Dulce Nombre" },
    { id: 30110, nombre: "Llano Grande" },
    { id: 30111, nombre: "Quebradilla" }
  ],
  // Paraíso (302)
  302: [
    { id: 30201, nombre: "Paraíso" },
    { id: 30202, nombre: "Santiago" },
    { id: 30203, nombre: "Orosi" },
    { id: 30204, nombre: "Cachí" },
    { id: 30205, nombre: "Llanos de Santa Lucía" }
  ],
  // La Unión (303)
  303: [
    { id: 30301, nombre: "Tres Ríos" },
    { id: 30302, nombre: "San Diego" },
    { id: 30303, nombre: "San Juan" },
    { id: 30304, nombre: "San Rafael" },
    { id: 30305, nombre: "Concepción" },
    { id: 30306, nombre: "Dulce Nombre" },
    { id: 30307, nombre: "San Ramón" },
    { id: 30308, nombre: "Río Azul" }
  ],
  // Jiménez (304)
  304: [
    { id: 30401, nombre: "Juan Viñas" },
    { id: 30402, nombre: "Tucurrique" },
    { id: 30403, nombre: "Pejibaye" }
  ],
  // Turrialba (305)
  305: [
    { id: 30501, nombre: "Turrialba" },
    { id: 30502, nombre: "La Suiza" },
    { id: 30503, nombre: "Peralta" },
    { id: 30504, nombre: "Santa Cruz" },
    { id: 30505, nombre: "Santa Teresita" },
    { id: 30506, nombre: "Pavones" },
    { id: 30507, nombre: "Tuis" },
    { id: 30508, nombre: "Tayutic" },
    { id: 30509, nombre: "Santa Rosa" },
    { id: 30510, nombre: "Tres Equis" },
    { id: 30511, nombre: "La Isabel" },
    { id: 30512, nombre: "Chirripó" }
  ],
  // Alvarado (306)
  306: [
    { id: 30601, nombre: "Pacayas" },
    { id: 30602, nombre: "Cervantes" },
    { id: 30603, nombre: "Capellades" }
  ],
  // Oreamuno (307)
  307: [
    { id: 30701, nombre: "San Rafael" },
    { id: 30702, nombre: "Cot" },
    { id: 30703, nombre: "Potrero Cerrado" },
    { id: 30704, nombre: "Cipreses" },
    { id: 30705, nombre: "Santa Rosa" }
  ],
  // El Guarco (308)
  308: [
    { id: 30801, nombre: "El Tejar" },
    { id: 30802, nombre: "San Isidro" },
    { id: 30803, nombre: "Tobosi" },
    { id: 30804, nombre: "Patio de Agua" }
  ],

  // HEREDIA - CANTONES Y DISTRITOS
  // Heredia (401)
  401: [
    { id: 40101, nombre: "Heredia" },
    { id: 40102, nombre: "Mercedes" },
    { id: 40103, nombre: "San Francisco" },
    { id: 40104, nombre: "Ulloa" },
    { id: 40105, nombre: "Varablanca" }
  ],
  // Barva (402)
  402: [
    { id: 40201, nombre: "Barva" },
    { id: 40202, nombre: "San Pedro" },
    { id: 40203, nombre: "San Pablo" },
    { id: 40204, nombre: "San Roque" },
    { id: 40205, nombre: "Santa Lucía" },
    { id: 40206, nombre: "San José de la Montaña" }
  ],
  // Santo Domingo (403)
  403: [
    { id: 40301, nombre: "Santo Domingo" },
    { id: 40302, nombre: "San Vicente" },
    { id: 40303, nombre: "San Miguel" },
    { id: 40304, nombre: "Paracito" },
    { id: 40305, nombre: "Santo Tomás" },
    { id: 40306, nombre: "Santa Rosa" },
    { id: 40307, nombre: "Tures" },
    { id: 40308, nombre: "Pará" }
  ],
  // Santa Bárbara (404)
  404: [
    { id: 40401, nombre: "Santa Bárbara" },
    { id: 40402, nombre: "San Pedro" },
    { id: 40403, nombre: "San Juan" },
    { id: 40404, nombre: "Jesús" },
    { id: 40405, nombre: "Santo Domingo" },
    { id: 40406, nombre: "Purabá" }
  ],
  // San Rafael (405)
  405: [
    { id: 40501, nombre: "San Rafael" },
    { id: 40502, nombre: "San Josecito" },
    { id: 40503, nombre: "Santiago" },
    { id: 40504, nombre: "Ángeles" },
    { id: 40505, nombre: "Concepción" }
  ],
  // San Isidro (406)
  406: [
    { id: 40601, nombre: "San Isidro" },
    { id: 40602, nombre: "San José" },
    { id: 40603, nombre: "Concepción" },
    { id: 40604, nombre: "San Francisco" }
  ],
  // Belén (407)
  407: [
    { id: 40701, nombre: "San Antonio" },
    { id: 40702, nombre: "La Ribera" },
    { id: 40703, nombre: "La Asunción" }
  ],
  // Flores (408)
  408: [
    { id: 40801, nombre: "San Joaquín" },
    { id: 40802, nombre: "Barrantes" },
    { id: 40803, nombre: "Llorente" }
  ],
  // San Pablo (409)
  409: [
    { id: 40901, nombre: "San Pablo" },
    { id: 40902, nombre: "Rincón de Sabanilla" }
  ],
  // Sarapiquí (410)
  410: [
    { id: 41001, nombre: "Puerto Viejo" },
    { id: 41002, nombre: "La Virgen" },
    { id: 41003, nombre: "Las Horquetas" },
    { id: 41004, nombre: "Llanuras del Gaspar" },
    { id: 41005, nombre: "Cureña" }
  ],

  // GUANACASTE - CANTONES Y DISTRITOS
  // Liberia (501)
  501: [
    { id: 50101, nombre: "Liberia" },
    { id: 50102, nombre: "Cañas Dulces" },
    { id: 50103, nombre: "Mayorga" },
    { id: 50104, nombre: "Nacascolo" },
    { id: 50105, nombre: "Curubandé" }
  ],
  // Nicoya (502)
  502: [
    { id: 50201, nombre: "Nicoya" },
    { id: 50202, nombre: "Mansión" },
    { id: 50203, nombre: "San Antonio" },
    { id: 50204, nombre: "Quebrada Honda" },
    { id: 50205, nombre: "Sámara" },
    { id: 50206, nombre: "Nosara" },
    { id: 50207, nombre: "Belén de Nosarita" }
  ],
  // Santa Cruz (503)
  503: [
    { id: 50301, nombre: "Santa Cruz" },
    { id: 50302, nombre: "Bolsón" },
    { id: 50303, nombre: "Veintisiete de Abril" },
    { id: 50304, nombre: "Tempate" },
    { id: 50305, nombre: "Cartagena" },
    { id: 50306, nombre: "Cuajiniquil" },
    { id: 50307, nombre: "Diriá" },
    { id: 50308, nombre: "Cabo Velas" },
    { id: 50309, nombre: "Tamarindo" }
  ],
  // Bagaces (504)
  504: [
    { id: 50401, nombre: "Bagaces" },
    { id: 50402, nombre: "La Fortuna" },
    { id: 50403, nombre: "Mogote" },
    { id: 50404, nombre: "Río Naranjo" }
  ],
  // Carrillo (505)
  505: [
    { id: 50501, nombre: "Filadelfia" },
    { id: 50502, nombre: "Palmira" },
    { id: 50503, nombre: "Sardinal" },
    { id: 50504, nombre: "Belén" }
  ],
  // Cañas (506)
  506: [
    { id: 50601, nombre: "Cañas" },
    { id: 50602, nombre: "Palmira" },
    { id: 50603, nombre: "San Miguel" },
    { id: 50604, nombre: "Bebedero" },
    { id: 50605, nombre: "Porozal" }
  ],
  // Abangares (507)
  507: [
    { id: 50701, nombre: "Las Juntas" },
    { id: 50702, nombre: "Sierra" },
    { id: 50703, nombre: "San Juan" },
    { id: 50704, nombre: "Colorado" }
  ],
  // Tilarán (508)
  508: [
    { id: 50801, nombre: "Tilarán" },
    { id: 50802, nombre: "Quebrada Grande" },
    { id: 50803, nombre: "Tronadora" },
    { id: 50804, nombre: "Santa Rosa" },
    { id: 50805, nombre: "Líbano" },
    { id: 50806, nombre: "Tierras Morenas" },
    { id: 50807, nombre: "Arenal" }
  ],
  // Nandayure (509)
  509: [
    { id: 50901, nombre: "Carmona" },
    { id: 50902, nombre: "Santa Rita" },
    { id: 50903, nombre: "Zapotal" },
    { id: 50904, nombre: "San Pablo" },
    { id: 50905, nombre: "Porvenir" },
    { id: 50906, nombre: "Bejuco" }
  ],
  // La Cruz (510)
  510: [
    { id: 51001, nombre: "La Cruz" },
    { id: 51002, nombre: "Santa Cecilia" },
    { id: 51003, nombre: "La Garita" },
    { id: 51004, nombre: "Santa Elena" }
  ],
  // Hojancha (511)
  511: [
    { id: 51101, nombre: "Hojancha" },
    { id: 51102, nombre: "Monte Romo" },
    { id: 51103, nombre: "Puerto Carrillo" },
    { id: 51104, nombre: "Huacas" }
  ],

  // PUNTARENAS - CANTONES Y DISTRITOS
  // Puntarenas (601)
  601: [
    { id: 60101, nombre: "Puntarenas" },
    { id: 60102, nombre: "Pitahaya" },
    { id: 60103, nombre: "Chomes" },
    { id: 60104, nombre: "Lepanto" },
    { id: 60105, nombre: "Paquera" },
    { id: 60106, nombre: "Manzanillo" },
    { id: 60107, nombre: "Guacimal" },
    { id: 60108, nombre: "Barranca" },
    { id: 60109, nombre: "Monte Verde" },
    { id: 60110, nombre: "Isla del Coco" },
    { id: 60111, nombre: "Cóbano" },
    { id: 60112, nombre: "Chacarita" },
    { id: 60113, nombre: "Chira" },
    { id: 60114, nombre: "Acapulco" },
    { id: 60115, nombre: "El Roble" },
    { id: 60116, nombre: "Arancibia" }
  ],
  // Esparza (602)
  602: [
    { id: 60201, nombre: "Espíritu Santo" },
    { id: 60202, nombre: "San Juan Grande" },
    { id: 60203, nombre: "Macacona" },
    { id: 60204, nombre: "San Rafael" },
    { id: 60205, nombre: "San Jerónimo" }
  ],
  // Buenos Aires (603)
  603: [
    { id: 60301, nombre: "Buenos Aires" },
    { id: 60302, nombre: "Volcán" },
    { id: 60303, nombre: "Potrero Grande" },
    { id: 60304, nombre: "Boruca" },
    { id: 60305, nombre: "Pilas" },
    { id: 60306, nombre: "Colinas" },
    { id: 60307, nombre: "Chánguena" },
    { id: 60308, nombre: "Biolley" },
    { id: 60309, nombre: "Brunka" }
  ],
  // Montes de Oro (604)
  604: [
    { id: 60401, nombre: "Miramar" },
    { id: 60402, nombre: "La Unión" },
    { id: 60403, nombre: "San Isidro" }
  ],
  // Osa (605)
  605: [
    { id: 60501, nombre: "Puerto Cortés" },
    { id: 60502, nombre: "Palmar" },
    { id: 60503, nombre: "Sierpe" },
    { id: 60504, nombre: "Bahía Ballena" },
    { id: 60505, nombre: "Piedras Blancas" }
  ],
  // Quepos (606)
  606: [
    { id: 60601, nombre: "Quepos" },
    { id: 60602, nombre: "Savegre" },
    { id: 60603, nombre: "Naranjito" }
  ],
  // Golfito (607)
  607: [
    { id: 60701, nombre: "Golfito" },
    { id: 60702, nombre: "Puerto Jiménez" },
    { id: 60703, nombre: "Guaycará" },
    { id: 60704, nombre: "Pavón" }
  ],
  // Coto Brus (608)
  608: [
    { id: 60801, nombre: "San Vito" },
    { id: 60802, nombre: "Sabalito" },
    { id: 60803, nombre: "Aguabuena" },
    { id: 60804, nombre: "Limoncito" },
    { id: 60805, nombre: "Pittier" }
  ],
  // Parrita (609)
  609: [
    { id: 60901, nombre: "Parrita" }
  ],
  // Corredores (610)
  610: [
    { id: 61001, nombre: "Corredor" },
    { id: 61002, nombre: "La Cuesta" },
    { id: 61003, nombre: "Paso Canoas" },
    { id: 61004, nombre: "Laurel" }
  ],
  // Garabito (611)
  611: [
    { id: 61101, nombre: "Jacó" },
    { id: 61102, nombre: "Tárcoles" }
  ],

  // LIMÓN - CANTONES Y DISTRITOS
  // Limón (701)
  701: [
    { id: 70101, nombre: "Limón" },
    { id: 70102, nombre: "Valle La Estrella" },
    { id: 70103, nombre: "Río Blanco" },
    { id: 70104, nombre: "Matama" }
  ],
  // Pococí (702)
  702: [
    { id: 70201, nombre: "Guápiles" },
    { id: 70202, nombre: "Jiménez" },
    { id: 70203, nombre: "Rita" },
    { id: 70204, nombre: "Roxana" },
    { id: 70205, nombre: "Cariari" },
    { id: 70206, nombre: "Colorado" }
  ],
  // Siquirres (703)
  703: [
    { id: 70301, nombre: "Siquirres" },
    { id: 70302, nombre: "Pacuarito" },
    { id: 70303, nombre: "Florida" },
    { id: 70304, nombre: "Germania" },
    { id: 70305, nombre: "El Cairo" },
    { id: 70306, nombre: "Alegría" }
  ],
  // Talamanca (704)
  704: [
    { id: 70401, nombre: "Bratsi" },
    { id: 70402, nombre: "Sixaola" },
    { id: 70403, nombre: "Cahuita" },
    { id: 70404, nombre: "Telire" }
  ],
  // Matina (705)
  705: [
    { id: 70501, nombre: "Matina" },
    { id: 70502, nombre: "Batán" },
    { id: 70503, nombre: "Carrandi" }
  ],
  // Guácimo (706)
  706: [
    { id: 70601, nombre: "Guácimo" },
    { id: 70602, nombre: "Mercedes" },
    { id: 70603, nombre: "Pocora" },
    { id: 70604, nombre: "Río Jiménez" },
    { id: 70605, nombre: "Duacarí" }
  ]
};
