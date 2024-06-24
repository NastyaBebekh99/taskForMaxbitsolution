import { Given, Then, When } from "@cucumber/cucumber";
import * as actionsWithPage from "../methods/actionsWithPage.js";
import * as urls from "../../adds/urls.js";
import { basePage } from "../pageobject/basePage.js";
import * as actionsWithElement from "../methods/actionsWithElement.js";
import { tournamentPage } from "../pageobject/tournamentPage.js";
import { bonusPage } from "../pageobject/bonusPage.js";
import { statusPage } from "../pageobject/statusPage.js";
import { lotteryPage } from "../pageobject/lotteryPage.js";
import { cashbackPage } from "../pageobject/caskbackPage.js";
import { newsPage } from "../pageobject/newsPage.js";
import { promotionPage } from "../pageobject/promotionPage.js";

Given(/I am on the main page/, async () => {
  await actionsWithPage.openPage(urls.mainPageUrl, basePage.topMenuElement);
  await actionsWithElement.checkPopUpRegistration(basePage.popupRegistration);
});

When(/I open (.*) section/, async (subMenuName) => {
  await (await basePage.topMenuPromoElement).moveTo();
  await (await basePage.subMenuElement(subMenuName)).waitForDisplayed();
  await (await basePage.subMenuElement(subMenuName)).click();
});
Then(/I should see status (.*)/, async (expected) => {
  await (await statusPage.statusPageMainBlock).waitForDisplayed();
  expect(await actionsWithElement.arrayOfElementsIncludesText(statusPage.statusElement, expected)).toBeTruthy();
});
Then(/I should see tournament Risk Effect/, async () => {
  await tournamentPage.tournamentElement.waitForDisplayed();
  expect(await (await tournamentPage.tournamentElement).isDisplayed()).toBeTruthy();
});
Then(/I should see birthday bonus contains (.*)/, async (text) => {
  expect(await (await bonusPage.titleOfBirthdayBonus).getText()).toEqual(text);
});
Then(/I should see button (.*)/, async (buttonText) => {
  await actionsWithElement.arrayOfElementsHasText(lotteryPage.buttonLearnMore, buttonText);
});
Then(/I should see block named (.*)/, async (blockName) => {
  await cashbackPage.titleOfCashbackBlock.waitForDisplayed();
  expect(await (await cashbackPage.titleOfCashbackBlock).getText()).toEqual(blockName);
});
Then(/I should see more than 2 news/, async () => {
  expect((await actionsWithElement.getQuantityOfElementsOnPage(newsPage.newsBlock)) > 2).toBeTruthy();
});
Then(/I should see more than 2 active promotions and more than 2 completed promotions/, async () => {
  expect((await actionsWithElement.getQuantityOfElementsOnPage(promotionPage.currentPromotions)) > 2).toBeTruthy();
  expect((await actionsWithElement.getQuantityOfElementsOnPage(promotionPage.comletedPromotions)) > 2).toBeTruthy();
});
