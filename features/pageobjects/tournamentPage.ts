import { mainPageUrl, tournamentPageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class TournamentPage extends BasePage {
  private get roxStarsTournamentElement() {
    return $("//a[@href='/tournaments/roxstars']");
  }

  public async roxStarsTournamentIsDisplayed() {
    await this.roxStarsTournamentElement.waitForDisplayed({ timeout: 3000 });
    expect(await this.roxStarsTournamentElement.isDisplayed()).toBeTruthy();
  }
}
export const tournamentPage = new TournamentPage(mainPageUrl + tournamentPageUrl);
