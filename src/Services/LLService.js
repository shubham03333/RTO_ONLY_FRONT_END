import axios from "axios";
import { URL } from "../config";
// const RTO_API_BASE_URL = "http://localhost:8080";

const RTO_API_BASE_URL = `${URL}`;

class LL {
  getLL() {
    return axios.get(RTO_API_BASE_URL + "/ll/search");
  }

  getLLById(llId) {
    return axios.get(RTO_API_BASE_URL + "/ll/" + llId);
  }

  updateLL(ll, llId) {
    return axios.put(RTO_API_BASE_URL + "/ll/" + llId, ll);
  }

  deleteLL(llId) {
    return axios.delete(RTO_API_BASE_URL + "/ll/" + llId);
  }
  getLLByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/ll/byUserId/" + userId);
  }
  getLLByUserId1(userId) {
    return axios.get(RTO_API_BASE_URL + "/ll/byUserId1/" + userId);
  }
}

export default new LL();
