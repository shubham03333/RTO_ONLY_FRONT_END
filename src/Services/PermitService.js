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

class Permit {
  getPermit() {
    return authAxios.get(RTO_API_BASE_URL + "/permit/search");
  }

  getPermitById(permitId) {
    return authAxios.get(RTO_API_BASE_URL + "/permit/" + permitId);
  }

  updatePermit(permit, permitId) {
    return authAxios.put(RTO_API_BASE_URL + "/permit/" + permitId, permit);
  }

  deletePermit(permitId) {
    return authAxios.delete(RTO_API_BASE_URL + "/permit/" + permitId);
  }
  getPermitByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/permit/byUserId/" + userId);
  }

  getPermitByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/permit/byUserId1/" + userId);
  }
  getPermitStatusByRcNo(RcNo) {
    return authAxios.get(RTO_API_BASE_URL + "/permit/rcNo/" + RcNo);
  }
}

export default new Permit();
