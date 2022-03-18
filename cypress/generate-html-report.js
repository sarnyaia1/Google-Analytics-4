const reporter = require('cucumber-html-reporter');
const { existsSync, unlinkSync } = require('fs');

const options = {
  theme: 'bootstrap',
  jsonDir: 'cypress/reports',
  output: 'cypress/reports/report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};

existsSync(`${options.output}.json`) && unlinkSync(`${options.output}.json`);
reporter.generate(options);
