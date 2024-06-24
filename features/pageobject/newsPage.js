import { newsPageUrl, mainPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class NewsPage extends BasePage {
  get newsBlock() {
    return $$(".news-list__item");
  }
}
export const newsPage = new NewsPage(mainPageUrl + newsPageUrl);
