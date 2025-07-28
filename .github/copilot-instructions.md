# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a React application for displaying telecom coverage maps for Costa Rica. The application uses:

- React with Vite for fast development
- Google Maps API for map visualization
- KML file loading for coverage data
- Interactive controls for Province, Canton, and District selection

## Key Features
- Interactive Google Maps with hybrid view
- KML/KMZ file parsing for coverage areas
- Dropdown controls for geographic navigation
- Automatic zoom and centering based on location selection
- Responsive design for different screen sizes

## Code Style Guidelines
- Use functional components with hooks
- Implement proper error handling for API calls
- Keep components modular and reusable
- Use meaningful variable and function names in Spanish for UI elements
- Follow React best practices for state management

## API Keys and External Resources
- Google Maps API key is configured in environment variables
- KML files should be served from the public directory
- Geocoding service is used for location-based navigation
