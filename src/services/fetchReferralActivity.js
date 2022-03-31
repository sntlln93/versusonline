import fetcher from "./fetcher";

const fetchReferralActivity = (token) => {
  if (!token) throw new Error("No token provided");

  return fetcher.get(`referrals`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default fetchReferralActivity;
