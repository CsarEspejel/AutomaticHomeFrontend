import Axios from "axios";
import Auth from "./Auth";
import CookieService from "./CookieService";
import URL from "./urlService";

class AuthService {
  async doRegister(credenciales) {
    const { data } = await Axios.post(
      URL.BASE_URL_API + "register",
      credenciales
    );
    return { success: data };
  }

  async doLogin(credenciales) {
    try {
      const { data } = await Axios.post(
        URL.BASE_URL_API + "login",
        credenciales
      );
      return data;
    } catch (error) {
      // console.log("error", error);
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
      const { data } = await Axios.get(URL.BASE_URL_API + "logout", config);
      // console.log("data", data);
      Auth.logout();
      return data;
    } catch (error) {
      // console.log("error", error);
      return false;
    }
  }
}

export default new AuthService();
