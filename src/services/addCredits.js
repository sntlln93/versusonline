import fetcher from "./fetcher";

const addCredits = (body) => {
  return fetcher.post("credits/add", body);
};

export default addCredits;
