import API from "./authService";

export const createInquiry =
  (data, token) =>
    API.post(
      "/inquiries",
      data,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );