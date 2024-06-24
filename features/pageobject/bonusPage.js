import { bonusPageUrl, mainPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class BonusPage extends BasePage {
   get titleOfBirthdayBonus() {
    return $("#birthday h2");
  }
}
export const bonusPage = new BonusPage(mainPageUrl + bonusPageUrl);
