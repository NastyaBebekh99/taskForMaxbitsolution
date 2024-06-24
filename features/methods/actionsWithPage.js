export async function openPage(url, webElement) {
    await browser.maximizeWindow();
    await browser.url(url);
    await webElement.waitForDisplayed();
  }

