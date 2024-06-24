import { basePage } from "../pageobject/basePage.js";


export async function checkPopUpRegistration(webElem) {
  const elem = await webElem.isDisplayed();
  if (elem) {
    await basePage.closePopUpRegistration.click();
  } else {
    await basePage.buttonEnter.click();
    await basePage.closePopUpRegistration.click();
  }
}
export async function arrayOfElementsIncludesText(webelement, text) {
  const statuses = await webelement.map(async (el) => await el.getText());
  return statuses.includes(text);
}
export async function arrayOfElementsHasText(webelement, expectedText) {
  await webelement.map(async (el) => {
    const text = await el.getText();
    expect(text).toEqual(expectedText);
  });
}
export async function getQuantityOfElementsOnPage(webelement) {
  return await webelement.length;
}
export async function moveElementToAnotherLayer(selector) {
  browser.execute(() => {
    const elemToRelocate = document.getElementById(selector);
    elemToRelocate.style.zIndex = "-1";
  });
}

export async function deleteElement(selector) {
  browser.execute(() => {
    const elemToRemove = document.getElementById(selector);
    elemToRemove.remove();
  });
}
