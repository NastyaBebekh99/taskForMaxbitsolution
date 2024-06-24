import { mainPageUrl, statusPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class StatusPage extends BasePage {
  get statusPageMainBlock() {
    return $(".status-page");
  }
  get statusElement() {
    return $$(".status-title");
  }
}
export const statusPage = new StatusPage(mainPageUrl + statusPageUrl);
