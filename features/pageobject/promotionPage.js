import { promotionsPageUrl, mainPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class PromotionPage extends BasePage {
  get currentPromotions() {
    return $$("//div[contains(@class, 'black-rulls')]/preceding-sibling::div/div");
  }
  get comletedPromotions() {
    return $$("//div[contains(@class, 'black-rulls')]/following-sibling::div/div");
  }
}
export const promotionPage = new PromotionPage(mainPageUrl + promotionsPageUrl);
