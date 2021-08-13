const URL = process.env.REACT_APP_API_URL;

const authenticateUser = (data) => {
  return fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export default authenticateUser;
