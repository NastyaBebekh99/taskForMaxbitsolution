import { Given, Then, When } from "@cucumber/cucumber";
import { statusPage } from "../pageobjects/statusPage";
import { basePage } from "../pageobjects/basePage";
import { tournamentPage } from "../pageobjects/tournamentPage";
import { bonusPage } from "../pageobjects/bonusPage";
import { lotteryPage } from "../pageobjects/lotteryPage";
import { cashbackPage } from "../pageobjects/caskbackPage";
import { newsPage } from "../pageobjects/newsPage";
import { promotionPage } from "../pageobjects/promotionPage";

Given(/I am on the main page/, async () => {
  await basePage.openPage();
});
When(/I open Promo section/, async () => {
  //ожидание модалки Регистрации добавлено для проверки работы тестов в случае ее появления
  await basePage.popupRegistrationIsDislayed();
  basePage.movePopupToAnotherLayer(); // вариант переноса модалки регистрации на другой слой
  // basePage.deletePopupElement(); //удаляет модалку регистрации из DOM - второй вариант работы с модалкой
  await basePage.hoverOnPromoSection();
});
When(/I open Status section/, async () => {
  await basePage.goToStatusPage();
});
Then(/I should see status (.*)/, async (status) => {
  expect(await statusPage.eliteStatusIsDisplayed(status)).toBeTruthy();
});
When(/I open Tournaments section/, async () => {
  await basePage.goToTournamentPage();
});
Then(/I should see tournament RoxStars/, async () => {
  await tournamentPage.roxStarsTournamentIsDisplayed();
});
When(/I open Bonus section/, async () => {
  await basePage.goToBonusPage();
});
Then(/I should see birthday bonus contains (.*)/, async (text) => {
  expect(await bonusPage.getTextOfBirthdayTitle()).toEqual(text);
});
When(/I open Lottery section/, async () => {
  await basePage.goToLotteryPage();
});
Then(/I should see button (.*)/, async (buttonText) => {
  await lotteryPage.lotteriesContainButtonLearnMore(buttonText);
});
When(/I open Cashback section/, async () => {
  await basePage.goToCashbackPage();
});
Then(/I should see block named (.*)/, async (blockName) => {
  expect(await cashbackPage.getTextOfCashbackBlock()).toEqual(blockName);
});
When(/I open News section/, async () => {
  await basePage.goToNewsPage();
});
Then(/I should see more than 2 news/, async () => {
  expect((await newsPage.getNewsQuantity()) > 2).toBeTruthy();
});
When(/I open Promotion section/, async () => {
  await basePage.goToPromotionsPage();
});
Then(/I should see more than 2 active promotions and more than 2 completed promotions/, async () => {
  expect((await promotionPage.getCurrentPromotionsQuantity()) > 2).toBeTruthy();
  expect((await promotionPage.getCompletedPromotionsQuantity()) > 2).toBeTruthy();
});
