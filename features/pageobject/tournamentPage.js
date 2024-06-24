import { mainPageUrl, tournamentPageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class TournamentPage extends BasePage {
  get tournamentElement() {
    return $("//div[@class='wrap-for-double-block']//a[@href='/tournaments/risk_effect']");
  }
}
export const tournamentPage = new TournamentPage(mainPageUrl + tournamentPageUrl);
