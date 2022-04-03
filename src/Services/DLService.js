import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080";

class DL {
  getDL() {
    return axios.get(RTO_API_BASE_URL + "/dl/search");
  }

  getDLById(dlId) {
    return axios.get(RTO_API_BASE_URL + "/dl/" + dlId);
  }

  updateDL(dl, dlId) {
    return axios.put(RTO_API_BASE_URL + "/dl/" + dlId, dl);
  }

  deleteDL(dlId) {
    return axios.delete(RTO_API_BASE_URL + "/dl/" + dlId);
  }
  getDLByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/dl/byUserId/" + userId);
  }

  getDLByUserId1(userId) {
    return axios.get(RTO_API_BASE_URL + "/dl/byUserId1/" + userId);
  }

  getPhotoById(Id) {
    return axios.get(RTO_API_BASE_URL + "/downloadFile/" + Id);
  }

  getDLByUserIdforcert(userId) {
    return axios.get(RTO_API_BASE_URL + "/dl/byUserIdforcert/" + userId);
  }
}

export default new DL();
