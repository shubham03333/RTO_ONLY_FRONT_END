import axios from "axios";
import { URL } from "../config";

// const RTO_API_BASE_URL = "http://localhost:8080";

const RTO_API_BASE_URL = `${URL}`;

class User {
  getUser() {
    return axios.get(RTO_API_BASE_URL + "/user/search");
  }

  getUserById(userId) {
    return axios.get(RTO_API_BASE_URL + "/user/" + userId);
  }

  updateUser(user, userId) {
    return axios.put(RTO_API_BASE_URL + "/user/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(RTO_API_BASE_URL + "/user/" + userId);
  }

  getPhotoById(Id) {
    return axios.get(RTO_API_BASE_URL + "/downloadFile/" + Id);
  }
}

export default new User();
