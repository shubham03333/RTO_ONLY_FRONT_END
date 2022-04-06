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

class Rc {
  getRc() {
    return authAxios.get(RTO_API_BASE_URL + "/rc/search");
  }

  getRcById(rcId) {
    return authAxios.get(RTO_API_BASE_URL + "/rc/" + rcId);
  }

  updateRc(rc, rcId) {
    return authAxios.put(RTO_API_BASE_URL + "/rc/" + rcId, rc);
  }

  deleteRc(rcId) {
    return authAxios.delete(RTO_API_BASE_URL + "/rc/" + rcId);
  }
  getRcByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/rc/byUserId/" + userId);
  }
  getRcByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/rc/byUserId1/" + userId);
  }

  getRcStatusByRcNo(RcNo) {
    return authAxios.get(RTO_API_BASE_URL + "/rc/rcNo/" + RcNo);
  }
}

export default new Rc();
