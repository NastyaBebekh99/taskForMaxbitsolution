import { promotionsPageUrl, mainPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class PromotionPage extends BasePage {
  private get currentPromotions() {
    return $$("//div[contains(@class, 'black-rulls')]/preceding-sibling::div/div");
  }
  private get comletedPromotions() {
    return $$("//div[contains(@class, 'black-rulls')]/following-sibling::div/div");
  }

  public async getCurrentPromotionsQuantity() {
    return await this.currentPromotions.length;
  }
  public async getCompletedPromotionsQuantity() {
    return await this.comletedPromotions.length;
  }
}
export const promotionPage = new PromotionPage(mainPageUrl + promotionsPageUrl);
