import axios from "axios";
import { URL } from "../config";

// const RTO_API_BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
});
const RTO_API_BASE_URL = `${URL}`;

class User {
  getUser() {
    return authAxios.get(RTO_API_BASE_URL + "/user/search");
  }

  getUserById(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/user/" + userId);
  }

  updateUser(user, userId) {
    return authAxios.put(RTO_API_BASE_URL + "/user/" + userId, user);
  }

  deleteUser(userId) {
    return authAxios.delete(RTO_API_BASE_URL + "/user/" + userId);
  }

  async getPhotoById(Id) {
    return await authAxios.get(RTO_API_BASE_URL + "/downloadFile/" + Id);
  }


}

export default new User();
