import { bonusPageUrl, mainPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class BonusPage extends BasePage {
  private get titleOfBirthdayBonus() {
    return $("#birthday h2");
  }

  public async getTextOfBirthdayTitle() {
    return await this.titleOfBirthdayBonus.getText();
  }
}
export const bonusPage = new BonusPage(mainPageUrl + bonusPageUrl);
