import toast from "react-hot-toast";

export const sendEmail = (data) => {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => {
      toast.success(`Hey, ${data.name} your message was sent successfully`);
    })
    .catch((err) => {
      alert(err);
    });
};
