import toast from "react-hot-toast";

export const sendEmail = (data) => {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      toast.success(res.message);
    })
    .catch((err) => {
      toast.error(err);
    });
};

export const sendRequest = (data) => {
  const apiEndpoint = "/api/quote";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      toast.success(res.message);
    })
    .catch((err) => {
      toast.error(err);
    });
};