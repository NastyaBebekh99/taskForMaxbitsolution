class AuthorizationForm {
  get inputEmail() {
    return $("[name='email']");
  }
  get inputPassword() {
    return $("[name='password']");
  }
  get buttonEnter() {
    return $("[data-test='auth-form-btn']");
  }
}
export const authorizationForm = new AuthorizationForm();
