import { mainPageUrl, profilePageUrl } from "../../adds/urls.js";
import { BasePage } from "./basePage.js";

class ProfilePage extends BasePage {
  get emailInformationElement() {
    return $("//form[@data-form-name='profile-email']//span[@class='confirme']");
  }
  get statusInformationElement() {
    return $("//div[@data-template='profile/edit-email']/following-sibling::div//span[@class='statuseName']");
  }
}
export const profilePage = new ProfilePage(mainPageUrl + profilePageUrl);
