import { lotteryPageUrl, mainPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class LotteryPage extends BasePage {
  private get buttonLearnMore() {
    return $$(".understand-more a");
  }

  public async lotteriesContainButtonLearnMore(buttonText: string) {
    await this.buttonLearnMore.map(async (el) => {
      const text = await el.getText();
      expect(text).toEqual(buttonText);
    });
  }
}
export const lotteryPage = new LotteryPage(mainPageUrl + lotteryPageUrl);
