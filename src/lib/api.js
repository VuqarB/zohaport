import toast from "react-hot-toast";

export const sendEmail = (data) => {
  const apiEndpoint = "/api/email";
  const { name } = data;

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => {
      toast.success(`Hey ${name}, thank you for the email`);
    })
    .catch((err) => {
      toast.error(err);
    });
};

export const sendRequest = (data) => {
  const apiEndpoint = "/api/quote";
  const { name } = data;

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => {
      toast.success(`Hey ${name}, thank you for your request`)
    })
    .catch((err) => {
      toast.error(err);
    });
};
