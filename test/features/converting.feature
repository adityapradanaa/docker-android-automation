@temperature
Feature: Convert Value From Celcius To Fahrenheit

  Scenario: User Successfully Onboarding
    Given User on Temperature onboarding page
    When User input 100 celcius
    Then The result should be 212 Fahrenheit
