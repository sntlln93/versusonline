const URL = process.env.REACT_APP_API_URL;

const registerUser = (data) => {
  return fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export default registerUser;
