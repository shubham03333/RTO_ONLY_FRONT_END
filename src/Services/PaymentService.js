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

class Payment {
  getPayment() {
    return authAxios.get(RTO_API_BASE_URL + "/payment/search");
  }

  getPaymentById(paymentId) {
    return authAxios.get(RTO_API_BASE_URL + "/payment/" + paymentId);
  }

  updatePayment(payment, paymentId) {
    return authAxios.put(RTO_API_BASE_URL + "/payment/" + paymentId, payment);
  }

  deletePayment(paymentId) {
    return authAxios.delete(RTO_API_BASE_URL + "/payment/" + paymentId);
  }
  getPaymentByUserId(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/payment/byUserId/" + userId);
  }

  getPaymentByUserId1(userId) {
    return authAxios.get(RTO_API_BASE_URL + "/payment/byUserId1/" + userId);
  }
}

export default new Payment();
