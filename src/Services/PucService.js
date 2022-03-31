import axios from "axios";

import { URL } from "../config";

// const RTO_API_BASE_URL = "http://localhost:8080";

const RTO_API_BASE_URL = `${URL}`;

class Puc {
  getPuc() {
    return axios.get(RTO_API_BASE_URL + "/puc/search");
  }

  getPucById(pucId) {
    return axios.get(RTO_API_BASE_URL + "/puc/" + pucId);
  }

  updatePuc(puc, pucId) {
    return axios.put(RTO_API_BASE_URL + "/puc/" + pucId, puc);
  }

  deletePuc(pucId) {
    return axios.delete(RTO_API_BASE_URL + "/puc/" + pucId);
  }
  getPucByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/puc/byUserId/" + userId);
  }
  getPucByUserId1(userId) {
    return axios.get(RTO_API_BASE_URL + "/puc/byUserId1/" + userId);
  }

  getPucStatusByRcNo(RcNo) {
    return axios.get(RTO_API_BASE_URL + "/puc/rcNo/" + RcNo);
  }
}

export default new Puc();
