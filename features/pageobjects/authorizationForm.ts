class AuthorizationForm {
  private get inputEmail() {
    return $("[name='email']");
  }
  private get inputPassword() {
    return $("[name='password']");
  }
  private get buttonEnter() {
    return $("[data-test='auth-form-btn']");
  }

  public async fillEmailInput(email: string) {
    await this.inputEmail.setValue(email);
  }
  public async fillPasswordInput(password: string) {
    await this.inputPassword.setValue(password);
  }
  public async authorize() {
    await this.buttonEnter.click();
  }
}
export const authorizationForm = new AuthorizationForm();
