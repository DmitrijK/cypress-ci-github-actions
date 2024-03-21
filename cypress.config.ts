import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://s-admin-dev.stormgeo.com/',
    chromeWebSecurity: false,
    downloadsFolder: 'cypress/downloads',
    env: {},
    specPattern: ['cypress/e2e/**/*.cy.ts'],
    excludeSpecPattern: ['**/all.cy.ts'],
    experimentalRunAllSpecs: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalOriginDependencies: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/results-[hash].xml',
      },
      cypressMochawesomeReporterReporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        overwrite: false,
        reportDir: 'cypress/reports/',
        reportFilename: '[name].html',
        saveJson: true,
      },
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    retries: {
      runMode: 2,
    },
    defaultCommandTimeout: 10000,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
