# TV Shows Application with VueJS
This web application which allows users to get details of their favourite TV-shows. The application makes 
use of open api: https://www.tvmaze.com/api.php to get the relevent data from the server.
On the Home page, it loads top rated shows ordered with repect to some of the popular genres . The user can 
use the search option to search for any particular show. On clicking the desired show, the user can view 
the details pertending to the particular show
The details of that meal show:
• Overview : name, poster, language, genres, rating and summary of the show
• Episodes : season, number, name and air-date of the episodes
• Cast : photo, name of the artist, name of the caharacter 
• Crew : photo, name of the artist, role of the crew members 

## Installations
## Vue CLI
```
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion refer the following pages.

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines ------------

1) Method Naming Convention, 
   variable, object declaration : camelCase
   Example : mealDetails, searchMeal() etc..

2) Folder Naming Convention: kabab-case
   Example : header, cards

3) File Naming Convention, component names : PascalCase
   Example : AppHeader.vue 
 

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. we can build responsive, 
   mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular 
   front-end CSS library — Material Design Component Framework. Release cadence : Weekly
   Please refer below url for more details:
   https://vuetifyjs.com/en/getting-started/quick-start

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, 
   coverageThreshold,etc for getting exact code coverage with reports.