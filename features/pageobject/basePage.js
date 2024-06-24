export class BasePage {
  get topMenuElement() {
    return $(".inner-head-background-line");
  }
  get topMenuPromoElement() {
    return $("//a[@href='/promo']");
  }
  get buttonEnter() {
    return $("[data-test='main_signin']");
  }
  get profileLink() {
    return $("[data-test='main_profile_login_name']");
  }
  get popupRegistration() {
    return $(".new-modal");
  }
  get closePopUpRegistration() {
    return $(".new-modal__close-ic-wr");
  }

  subMenuElement(name) {
    return $(`//a[@href='/promo']/following::a[contains(text(), '${name}')]`);
  }
}
export const basePage = new BasePage();
