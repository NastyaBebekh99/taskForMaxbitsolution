import { Given, Then, When } from "@wdio/cucumber-framework";
import { basePage } from "../pageobjects/basePage";
import { authorizationForm } from "../pageobjects/authorizationForm";
import { profilePage } from "../pageobjects/profilePage";

Given(/I authorize with (.*) and (.*)/, async (email, password) => {
  await basePage.openAuthorizationForm();
  await authorizationForm.fillEmailInput(email);
  await authorizationForm.fillPasswordInput(password);
  await authorizationForm.authorize();
});
When(/I open profile settings/, async () => {
  await basePage.openProfile();
});
Then(/I see confirmed email with text (.*)/, async (confirmationText) => {
  expect(await profilePage.getTextOfEmailInformation()).toEqual(confirmationText);
});
Then(/I see user status (.*)/, async (userStatus) => {
  expect((await profilePage.getUserStatus()).toUpperCase()).toEqual(userStatus);
});
