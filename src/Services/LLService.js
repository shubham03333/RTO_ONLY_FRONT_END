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
class LL {
  getLL() {
    return authAxios.get(RTO_API_BASE_URL + "/ll/search");
  }

  getLLById(llId) {
    return authAxios.get(RTO_API_BASE_URL + "/ll/" + llId);
  }

  updateLL(ll, llId) {
    return authAxios.put(RTO_API_BASE_URL + "/ll/" + llId, ll);
  }

  deleteLL(llId) {
    return authAxios.delete(RTO_API_BASE_URL + "/ll/" + llId);
  }
  getLLByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/ll/byUserId/" + userId);
  }
  getLLByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/ll/byUserId1/" + userId);
  }
  getLLByUserIdforcert(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/ll/byUserIdforcert/" + userId);
  }

  updateLLresult(ll, llId) {
    return authAxios.put(RTO_API_BASE_URL + "/ll/result/" + llId, ll);
  }
}

export default new LL();
