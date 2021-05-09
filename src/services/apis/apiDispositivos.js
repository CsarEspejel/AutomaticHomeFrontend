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
    return await Axios.get(URL.BASE_URL + "/dispositivo", config);
  }
  async getOneDispositivo(id) {
    return await Axios.get(URL.BASE_URL + "/dispositivo/" + id + "/edit");
  }

  async addDispositivo(post) {
    return await Axios.post(URL.BASE_URL + "/dispositivo", post);
  }

  async updateDispositivo(post, id) {
    return await Axios.put(URL.BASE_URL + "/dispositivo/" + id, post);
  }

  async deleteDispositivo(id) {
    return await Axios.delete(URL.BASE_URL + "/dispositivo/" + id);
  }
}

export default new ApiDispositivos();
