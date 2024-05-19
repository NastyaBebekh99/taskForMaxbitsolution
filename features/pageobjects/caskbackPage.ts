import { cashbackPageUrl, mainPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class CashbackPage extends BasePage {
  private get titleOfCashbackBlock() {
    return $(".main-context h2");
  }

  public async getTextOfCashbackBlock() {
    return await this.titleOfCashbackBlock.getText();
  }
}
export const cashbackPage = new CashbackPage(mainPageUrl + cashbackPageUrl);
