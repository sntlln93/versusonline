import fetcher from "./fetcher";

const checkoutCredits = (body) => {
  return fetcher.post("credits/checkout", body);
};

export default checkoutCredits;
