import axios from "axios";
import express from "express";

type Environment = "sandbox" | "live";

const APP_ENVIRONMENT: Environment = "live"; // Change to "sandbox" when needed

const API_URLS = {
  sandbox: "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken",
  live: "https://pay.pesapal.com/v3/api/Auth/RequestToken",
};

const consumerKey = ""; // Set your consumer key
const consumerSecret = ""; // Set your consumer secret

const getAccessToken = async (): Promise<string | null> => {
  try {
    const apiUrl = API_URLS[APP_ENVIRONMENT];
    
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    
    const response = await axios.post(apiUrl, {
      consumer_key: consumerKey,
      consumer_secret: consumerSecret,
    }, { headers });
    
    return response.data.token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

const app = express();
const PORT = 3000;

app.get("/get-token", async (req, res) => {
  const token = await getAccessToken();
  if (token) {
    res.json({ token });
  } else {
    res.status(500).json({ error: "Failed to fetch access token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
