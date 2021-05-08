import Axios from "axios";
import Auth from "./Auth";
import CookieService from "./CookieService";

class AuthService {
  async doLogin(credenciales) {
    try {
      const { data } = await Axios.post(
        "http://localhost:8000/api/login",
        credenciales
      );
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
    CookieService.getCookie("access_token");
    try {
      const { data } = await Axios.get("http://localhost:8000/api/logout");
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
