// Onboarding
const celciusTextField = $('id:editText1');
const fahrenheitTextField = $('id:editText2');

const Converting = function converting() {
  this.validateOnboardingPage = async () => {
    await celciusTextField.waitForExist(1000);
    await expect(celciusTextField).toBeDisplayed();
    await expect(fahrenheitTextField).toBeDisplayed();
  };

  this.inputValue = async () => {
    const celciusTextField = $('id:editText1');
    await celciusTextField.addValue('100');
    await driver.setTimeouts(750);
  };

  this.validateValue = async () => {
    const fahrenheitTextField = $('id:editText2'); 
    await expect(fahrenheitTextField).toHaveTextContaining('212');
  };
};

module.exports = new Converting();
