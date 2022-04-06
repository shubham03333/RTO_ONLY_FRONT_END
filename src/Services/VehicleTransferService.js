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

class VehicleTransfer {
  getVtransfer() {
    return authAxios.get(RTO_API_BASE_URL + "/vehicle_transfer/search");
  }

  getVtransferById(vtransferId) {
    return authAxios.get(RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId);
  }

  updateVehicleTransfer(vtransfer, vtransferId) {
    return authAxios.put(
      RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId,
      vtransfer
    );
  }

  deleteVehicleTransfer(vtransferId) {
    return authAxios.delete(
      RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId
    );
  }
  getVehicleTransferByUserId(userId) {
    return authAxios.get(
      RTO_API_BASE_URL + "/vehicle_transfer/byUserId/" + userId
    );
  }
  getVehicleTransferByUserId1(userId) {
    return authAxios.get(
      RTO_API_BASE_URL + "/vehicle_transfer/byUserId1/" + userId
    );
  }

  getVtransferStatusByRcNo(RcNo) {
    return authAxios.get(RTO_API_BASE_URL + "/vehicle_transfer/rcNo/" + RcNo);
  }

  getVtransferStatusByReg_id(regId) {
    return authAxios.get(
      RTO_API_BASE_URL + "/vehicle_transfer/byregId/" + regId
    );
  }
}

export default new VehicleTransfer();
