import { mainPageUrl, statusPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class StatusPage extends BasePage {
  private get statusPageMainBlock() {
    return $(".status-page");
  }
  private get statusElement() {
    return $$(".status-title");
  }

  public async eliteStatusIsDisplayed(status: string) {
    await this.statusPageMainBlock.waitForDisplayed();
    const statuses = await this.statusElement.map(async (el) => await el.getText());
    return statuses.includes(status);
  }
}
export const statusPage = new StatusPage(mainPageUrl + statusPageUrl);
