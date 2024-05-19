import { mainPageUrl } from "../../adds/urls";

export class BasePage {
  constructor(protected url: string) {}

  private get topMenuElement() {
    return $(".inner-head-background-line");
  }
  private get topMenuPromoElement() {
    return $("//a[@href='/promo']");
  }
  private get subMenuStatusElement() {
    return $("//a[contains(text(), 'СТАТУСЫ')]");
  }
  private get subMenuTournamentElement() {
    return $("//a[contains(text(), 'ТУРНИРЫ')]");
  }
  private get subMenuBonusElement() {
    return $("//a[@href='/promo']/following::a[contains(text(), 'БОНУСЫ')]");
  }
  private get subMenuLotteryElement() {
    return $("//a[contains(text(), 'ЛОТЕРЕИ')]");
  }
  private get subMenuCashbackElement() {
    return $("//a[contains(text(), 'КЕШБЭК')]");
  }
  private get subMenuNewsElement() {
    return $("//a[contains(text(), 'НОВОСТИ')]");
  }
  private get subMenuPromotionsElement() {
    return $("//a[@href='/promo']/following::a[contains(text(), 'АКЦИИ')]");
  }
  private get buttonEnter() {
    return $("[data-test='main_signin']");
  }
  private get profileLink() {
    return $("[data-test='main_profile_login_name']");
  }
  private get popupRegistration() {
    return $(".new-modal");
  }

  public async openPage() {
    await browser.maximizeWindow();
    await browser.url(this.url);
    await this.topMenuElement.waitForDisplayed({ timeout: 8000 });
  }
  public async hoverOnPromoSection() {
    await this.topMenuPromoElement.moveTo();
  }
  public async goToStatusPage() {
    await this.subMenuStatusElement.waitForDisplayed();
    await this.subMenuStatusElement.click();
  }
  public async goToTournamentPage() {
    await this.subMenuTournamentElement.waitForDisplayed();
    await this.subMenuTournamentElement.click();
  }
  public async goToBonusPage() {
    await this.subMenuBonusElement.waitForDisplayed();
    await this.subMenuBonusElement.click();
  }
  public async goToLotteryPage() {
    await this.subMenuLotteryElement.waitForDisplayed();
    await this.subMenuLotteryElement.click();
  }
  public async goToCashbackPage() {
    await this.subMenuCashbackElement.waitForDisplayed();
    await this.subMenuCashbackElement.click();
  }
  public async goToNewsPage() {
    await this.subMenuNewsElement.waitForDisplayed();
    await this.subMenuNewsElement.click();
  }
  public async goToPromotionsPage() {
    await this.subMenuPromotionsElement.waitForDisplayed();
    await this.subMenuPromotionsElement.click();
  }
  public async openAuthorizationForm() {
    await this.buttonEnter.click();
  }
  public async openProfile() {
    await this.topMenuElement.waitForDisplayed({ timeout: 3000 });
    await this.profileLink.click();
  }
  public async popupRegistrationIsDislayed() {
    await this.popupRegistration.waitForExist({ timeout: 20000 });
  }
  public async movePopupToAnotherLayer() {
    browser.execute(() => {
      const elemToRelocate = document.getElementById("js-modal-container-rox");
      elemToRelocate!.style.zIndex = "-1";
    });
  }
  public async deletePopupElement() {
    browser.execute(() => {
      const elemToRemove = document.getElementById("js-modal-container-rox");
      elemToRemove!.remove();
    });
  }
}
export const basePage = new BasePage(mainPageUrl);
