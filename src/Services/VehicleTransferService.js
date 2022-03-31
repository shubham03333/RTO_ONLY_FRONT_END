import axios from "axios";
import { URL } from "../config";
// const RTO_API_BASE_URL = "http://localhost:8080";
import { URL } from "../config";

class VehicleTransfer {
  getVtransfer() {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/search");
  }

  getVtransferById(vtransferId) {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId);
  }

  updateVehicleTransfer(vtransfer, vtransferId) {
    return axios.put(
      RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId,
      vtransfer
    );
  }

  deleteVehicleTransfer(vtransferId) {
    return axios.delete(RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId);
  }
  getVehicleTransferByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/byUserId/" + userId);
  }
  getVehicleTransferByUserId1(userId) {
    return axios.get(
      RTO_API_BASE_URL + "/vehicle_transfer/byUserId1/" + userId
    );
  }

  getVtransferStatusByRcNo(RcNo) {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/rcNo/" + RcNo);
  }

  getVtransferStatusByReg_id(regId) {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/byregId/" + regId);
  }
}

export default new VehicleTransfer();
