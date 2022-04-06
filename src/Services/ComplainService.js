import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
});

class Complain {
  getComplain() {
    return authAxios.get(RTO_API_BASE_URL + "/complain/search");
  }

  getComplainById(complainId) {
    return authAxios.get(RTO_API_BASE_URL + "/complain/" + complainId);
  }

  updateComplain(complain, complainId) {
    return authAxios.put(
      RTO_API_BASE_URL + "/complain/" + complainId,
      complain
    );
  }

  deleteComplain(complainId) {
    return authAxios.delete(RTO_API_BASE_URL + "/complain/" + complainId);
  }
  getComplainByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/complain/byUserId/" + userId);
  }

  getComplainByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/complain/byUserId1/" + userId);
  }
}

export default new Complain();
