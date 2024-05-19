import { mainPageUrl, profilePageUrl } from "../../adds/urls";
import { BasePage } from "./basePage";

class ProfilePage extends BasePage {
  private get emailInformationElement() {
    return $("//form[@data-form-name='profile-email']//span[@class='confirme']");
  }
  private get statusInformationElement() {
    return $("//div[@data-template='profile/edit-email']/following-sibling::div//span[@class='statuseName']");
  }

  public async getTextOfEmailInformation() {
    return await this.emailInformationElement.getText();
  }
  public async getUserStatus() {
    return await this.statusInformationElement.getText();
  }
}
export const profilePage = new ProfilePage(mainPageUrl + profilePageUrl);
