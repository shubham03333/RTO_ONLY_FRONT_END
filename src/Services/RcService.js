import axios from "axios";
import { URL } from "../config";
// const RTO_API_BASE_URL = "http://localhost:8080";

const RTO_API_BASE_URL = `${URL}`;

class Rc {
  getRc() {
    return axios.get(RTO_API_BASE_URL + "/rc/search");
  }

  getRcById(rcId) {
    return axios.get(RTO_API_BASE_URL + "/rc/" + rcId);
  }

  updateRc(rc, rcId) {
    return axios.put(RTO_API_BASE_URL + "/rc/" + rcId, rc);
  }

  deleteRc(rcId) {
    return axios.delete(RTO_API_BASE_URL + "/rc/" + rcId);
  }
  getRcByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/rc/byUserId/" + userId);
  }
  getRcByUserId1(userId) {
    return axios.get(RTO_API_BASE_URL + "/rc/byUserId1/" + userId);
  }

  getRcStatusByRcNo(RcNo) {
    return axios.get(RTO_API_BASE_URL + "/rc/rcNo/" + RcNo);
  }
}

export default new Rc();
