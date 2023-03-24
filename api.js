export const url = "https://tenant-sever-app.onrender.com/stats";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("profile"),
    },
  };

  return headers;
};