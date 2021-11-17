const {Given, Then} = require('@cucumber/cucumber');
const loginPage = require('../pageobjects/login.page');

Given('User on Kompasid onboarding', async () => {
    await loginPage.validateOnboardingPage();
});
