import CookieService from "./CookieService";

class Auth {
  constructor() {
    const token = CookieService.getCookie("access_token");
    token ? (this.authenticated = true) : (this.authenticated = false);
    // return this.authenticated;
  }

  logout() {
    CookieService.removeCookie("access_token");
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getAccessToken() {
    return CookieService.getCookie("access_token");
  }
}

export default new Auth();
