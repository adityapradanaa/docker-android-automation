const {Given, When, Then} = require('@cucumber/cucumber');
const converting = require('../pageobjects/converting');

Given('User on Temperature onboarding page', async () => {
    await converting.validateOnboardingPage();
});

When('User input 100 celcius', async () => {
    await converting.inputValue();
});

Then('The result should be 212 Fahrenheit', async () => {
    await converting.validateValue();
});
