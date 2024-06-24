import { lotteryPageUrl, mainPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class LotteryPage extends BasePage {
  get buttonLearnMore() {
    return $$(".understand-more a");
  }
}
export const lotteryPage = new LotteryPage(mainPageUrl + lotteryPageUrl);
