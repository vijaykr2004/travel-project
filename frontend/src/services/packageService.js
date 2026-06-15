import API from "./authService";

export const getPackages = () =>
  API.get("/api/packages");

export const getPackageById = (id) =>
  API.get(`/api/packages/${id}`);