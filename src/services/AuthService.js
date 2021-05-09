import Axios from "axios";
import Auth from "./Auth";
import CookieService from "./CookieService";
import URL from "./urlService";

class AuthService {
  async doLogin(credenciales) {
    try {
      const { data } = await Axios.post(URL.BASE_URL + "login", credenciales);
      // console.log("datos", data);
      return data;
      // let date = new Date();
      // date.setTime(date.getTime() + (expiresAt * 60 * 1000));
      // const options
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }

  async handleLogin(response) {
    const options = { path: "/" };
    CookieService.setCookie("access_token", response.access_token, options);
    return true;
  }

  async doLogout() {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + CookieService.getCookie("access_token"),
        },
      };
      const { data } = await Axios.get(URL.BASE_URL + "logout", config);
      console.log("data", data);
      Auth.logout();
      return data;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }
}

export default new AuthService();
