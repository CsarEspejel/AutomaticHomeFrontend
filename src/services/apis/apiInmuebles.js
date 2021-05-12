import Axios from "axios";
import CookieService from "../CookieService";
import URL from "../urlService";

let config = {
  headers: {
    Authorization: "Bearer " + CookieService.getCookie("access_token"),
  },
};

class ApiInmuebles {
  async getAllInmuebles() {
    return await Axios.get(URL.BASE_URL_API + "inmueble", config);
  }
  async getOneInmueble(id) {
    return await Axios.get(
      URL.BASE_URL_API + "inmueble/" + id + "/edit",
      config
    );
  }

  async addInmueble(post) {
    return await Axios.post(URL.BASE_URL_API + "inmueble", post, config);
  }

  async updateInmueble(post, id) {
    return await Axios.put(URL.BASE_URL_API + "inmueble/" + id, post, config);
  }

  async deleteInmueble(id) {
    return await Axios.delete(URL.BASE_URL_API + "inmueble/" + id, config);
  }
}

export default new ApiInmuebles();
