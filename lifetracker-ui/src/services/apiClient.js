import axios from "axios";
import { string } from "prop-types";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("life_tracker_token", token);
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || string(err) };
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: "auth/me", method: "GET" });
  }

  async login(credentials) {
    return await this.request({ endpoint: "auth/login", method: "POST", data: credentials });
  }

  async register(credentials) {
    return await this.request({ endpoint: "auth/register", method: "POST", data: credentials });
  }

  async getAllExerciseData() {
    return this.request({ endpoint: "exercise/", method: "GET" });
  }

  async getAllNutritionData() {
    return this.request({ endpoint: "nutrition/", method: "GET" });
  }

  async getAllSleepData() {
    return this.request({ endpoint: "sleep/", method: "GET" });
  }

  async addExercise(data) {
    return this.request({ endpoint: "exercise", method: "POST", data: data });
  }

  async listExercises(user) {
    return this.request({ endpoint: "exercise", method: "GET" });
  }

  async addNutrition(data) {
    return this.request({ endpoint: "nutrition/", method: "POST", data: data });
  }
  async listNutrition(user) {
    return this.request({ endpoint: "nutrition/", method: "GET" });
  }
}

// export default new ApiClient("https://ftl-eva1.herokuapp.com/");
export default new ApiClient("http://localhost:3001");

// process.env.REACT_APP_REMOTE_HOST_URL ||