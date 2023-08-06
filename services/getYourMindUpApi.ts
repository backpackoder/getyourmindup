import axios from "axios";

const getYourMindUpApi = axios.create({
  baseURL: "/api",
});

export default getYourMindUpApi;
