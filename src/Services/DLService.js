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
class DL {
  getDL() {
    return authAxios.get(RTO_API_BASE_URL + "/dl/search");
  }

  getDLById(dlId) {
    return authAxios.get(RTO_API_BASE_URL + "/dl/" + dlId);
  }

  updateDL(dl, dlId) {
    return authAxios.put(RTO_API_BASE_URL + "/dl/" + dlId, dl);
  }

  deleteDL(dlId) {
    return authAxios.delete(RTO_API_BASE_URL + "/dl/" + dlId);
  }
  getDLByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/dl/byUserId/" + userId);
  }

  getDLByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/dl/byUserId1/" + userId);
  }

  getPhotoById(Id) {
    return authAxios.get(RTO_API_BASE_URL + "/downloadFile/" + Id);
  }

  getDLByUserIdforcert(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/dl/byUserIdforcert/" + userId);
  }
}

export default new DL();
