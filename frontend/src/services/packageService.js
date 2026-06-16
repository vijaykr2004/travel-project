import API from "./authService";

export const getPackages = () =>
  API.get("/packages");

export const getPackageById = (id) =>
  API.get(`/packages/${id}`);