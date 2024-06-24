import { cashbackPageUrl, mainPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class CashbackPage extends BasePage {
  get titleOfCashbackBlock() {
    return $(".main-context h2");
  }
}
export const cashbackPage = new CashbackPage(mainPageUrl + cashbackPageUrl);
