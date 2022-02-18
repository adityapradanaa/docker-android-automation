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
    await celciusTextField.click();
    await celciusTextField.addValue('100');
  };

  this.validateValue = async () => { 
    await expect(fahrenheitTextField).toHaveTextContaining('212');
  };
};

module.exports = new Converting();
