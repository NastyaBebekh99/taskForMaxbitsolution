import { Given, Then, When } from "@wdio/cucumber-framework";
import { basePage } from "../pageobject/basePage.js";
import { authorizationForm } from "../pageobject/authorizationForm.js";
import { email, password } from "../../testData/userData.js";
import { profilePage } from "../pageobject/profilePage.js";

Given(/I authorize with email and password/, async () => {
  await (await basePage.buttonEnter).click();
  await (await authorizationForm.inputEmail).setValue(email);
  await (await authorizationForm.inputPassword).setValue(password);
  await (await authorizationForm.buttonEnter).click();
});
When(/I open profile settings/, async () => {
  await (await basePage.topMenuElement).waitForDisplayed();
  await (await basePage.profileLink).click();
});
Then(/I see confirmed email with text Подтверждена/, async () => {
  expect(await (await profilePage.emailInformationElement).getText()).toEqual("Подтверждена");
});
Then(/I see user status NEW/, async () => {
  expect((await (await profilePage.statusInformationElement).getText()).toUpperCase()).toEqual("NEW");
});
