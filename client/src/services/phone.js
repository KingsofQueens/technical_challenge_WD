import api from "./api";

export const phoneLoadSingle = (id) =>
  api.get(`/phones/${id}`).then((response) => response.data);

export const phoneLoadAll = () =>
  api.get("/phones").then((response) => response.data);
