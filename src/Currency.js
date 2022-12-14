// I couldn't make it work but this is what I tried to do

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Currency() {
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("");
  const apiKey = process.env.REACT_APP_IPINFO_API_KEY;
  const ipInfoApiUrl = `https://ipinfo.io/json?token=${apiKey}`;

  useEffect(() => {
    axios.get(ipInfoApiUrl).then(handleResponse);
  });

  const determineCurrency = () => {
    if (location.includes("Europe")) {
      setCurrency("eur");
    } else {
      setCurrency("usd");
    }
  }

  const handleResponse = (response) => {
    setLocation(response.data.timezone);
    if (location) {
      determineCurrency();
    }
  }
  return currency;
}
