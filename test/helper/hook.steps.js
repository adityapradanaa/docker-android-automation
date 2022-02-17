import cucumberJson from 'wdio-cucumberjs-json-reporter';

const { After, Status } = require('@cucumber/cucumber');

After(async (scenarioResult) => {
  if (scenarioResult.result.status === Status.FAILED) {
    // It will add the screenshot to the JSON
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  }
  return scenarioResult.status;
});
