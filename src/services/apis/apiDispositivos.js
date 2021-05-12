import Axios from "axios";
import CookieService from "../CookieService";
import URL from "../urlService";

let config = {
  headers: {
    Authorization: "Bearer " + CookieService.getCookie("access_token"),
  },
};

class ApiDispositivos {
  async getAllDispositivos() {
    return await Axios.get(URL.BASE_URL_API + "dispositivo", config);
  }
  async getOneDispositivo(id) {
    return await Axios.get(
      URL.BASE_URL_API + "dispositivo/" + id + "/edit",
      config
    );
  }

  async addDispositivo(post) {
    return await Axios.post(URL.BASE_URL_API + "dispositivo", post, config);
  }

  async updateDispositivo(post, id) {
    return await Axios.put(
      URL.BASE_URL_API + "dispositivo/" + id,
      post,
      config
    );
  }

  async deleteDispositivo(id) {
    return await Axios.delete(URL.BASE_URL_API + "dispositivo/" + id, config);
  }
}

export default new ApiDispositivos();
