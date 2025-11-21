# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Building and Development

- `npm run build` - Build the project using Webpack
- `npm start` - Start development server on port 9000 with hot reload
- `npm run lint` - Run ESLint on src/ directory
- `npm run lint:fix` - Run ESLint with auto-fix on src/ directory

### Testing

- `npm test` - Run Jest tests with coverage collection
- Tests are configured to use jsdom environment for DOM testing
- Test files follow the pattern `*.test.js` in src/ directory

### Code Quality

- `npm run format:check` - Check code formatting with Prettier
- `npm run format:fix` - Auto-fix code formatting with Prettier
- Husky pre-commit hooks are configured with lint-staged

## Architecture Overview

This is a weather/location information application built with vanilla JavaScript and Webpack:

### Core Structure

- **Entry Point**: `src/createPage.js` - Main application entry that creates DOM elements and sets up event listeners
- **Utilities**: `src/utils.js` - Contains API functions, DOM manipulation utilities, and business logic
- **Tests**: `src/script.test.js` - Jest test suite (currently has empty test stubs)

### Key Components

#### API Integration (`utils.js`)

- `getInformation.getGeo()` - Fetches current location data from geojs.io API
- `getInformation.getFetchInformation(cityName)` - Fetches weather data from OpenWeatherMap API
- Contains OpenWeatherMap API key: `63b151efb40928e868a13e6198b120c9`

#### DOM Management (`utils.js`)

- `createElements` object - Methods to create h3, input, button, and ul elements
- `buttonBehavior()` - Main interaction logic that handles empty input (shows location) vs filled input (shows weather for city)
- Dynamic list generation with nested structure for complex API responses

#### Build Configuration

- Webpack development mode with dev server on port 9000
- CSS loading via style-loader and css-loader
- HTML template at `src/index.html`
- Output to `dist/main.js`

### Application Flow

1. Page loads and creates DOM elements (h3, input, button, ul)
2. Button click triggers `buttonBehavior()`
3. If input is empty: fetch and display current location data
4. If input has value: fetch and display weather data for that city
5. Results are dynamically rendered as nested lists in the ul element

### Development Notes

- Uses ES modules (`"type": "module"` in package.json)
- Jest configured with Babel transformation for ES modules
- Coverage collection enabled by default
- ESLint configured for src/ directory only
