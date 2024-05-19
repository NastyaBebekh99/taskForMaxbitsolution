import { newsPageUrl, mainPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class NewsPage extends BasePage {
  private get newsBlock() {
    return $$(".news-list__item");
  }

  public async getNewsQuantity() {
    return await this.newsBlock.length;
  }
}
export const newsPage = new NewsPage(mainPageUrl + newsPageUrl);
