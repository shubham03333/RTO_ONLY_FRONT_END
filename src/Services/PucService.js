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

class Puc {
  getPuc() {
    return authAxios.get(RTO_API_BASE_URL + "/puc/search");
  }

  getPucById(pucId) {
    return authAxios.get(RTO_API_BASE_URL + "/puc/" + pucId);
  }

  updatePuc(puc, pucId) {
    return authAxios.put(RTO_API_BASE_URL + "/puc/" + pucId, puc);
  }

  deletePuc(pucId) {
    return authAxios.delete(RTO_API_BASE_URL + "/puc/" + pucId);
  }
  getPucByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/puc/byUserId/" + userId);
  }
  getPucByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/puc/byUserId1/" + userId);
  }

  getPucStatusByRcNo(RcNo) {
    return authAxios.get(RTO_API_BASE_URL + "/puc/rcNo/" + RcNo);
  }
}

export default new Puc();
