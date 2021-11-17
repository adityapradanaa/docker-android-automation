// Onboarding
const onboardingButton = $('//*[@text="Lanjut"]');

const Onboarding = function home() {
    this.validateOnboardingPage = async () => {
        await expect(onboardingButton).toBeDisplayed();
    }
}

module.exports = new Onboarding();
