import axios from "axios";
import { URL } from "../config";
// const RTO_API_BASE_URL = "http://localhost:8080";
const RTO_API_BASE_URL = `${URL}`;

class Complain {
  getComplain() {
    return axios.get(RTO_API_BASE_URL + "/complain/search");
  }

  getComplainById(complainId) {
    return axios.get(RTO_API_BASE_URL + "/complain/" + complainId);
  }

  updateComplain(complain, complainId) {
    return axios.put(RTO_API_BASE_URL + "/complain/" + complainId, complain);
  }

  deleteComplain(complainId) {
    return axios.delete(RTO_API_BASE_URL + "/complain/" + complainId);
  }
  getComplainByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/complain/byUserId/" + userId);
  }

  getComplainByUserId1(userId) {
    return axios.get(RTO_API_BASE_URL + "/complain/byUserId1/" + userId);
  }
}

export default new Complain();
