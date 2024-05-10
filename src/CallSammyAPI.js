import React, { useState } from "react";
import axios from "axios";

function HttpRequestToDO() {
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const makeHttpRequest = async () => {
    try {
      const response = await axios.get(
        "https://api.digitalocean.com/v2/account"
      );

      if (response.status !== 200) {
        throw new Error(
          `HTTP request to DigitalOcean failed with status code ${response.status}`
        );
      }

      setResponseMessage(response.data.message);
    } catch (error) {
      setError(error.message);
      console.error(error); // Log the error to the console
    }
  };

  return (
    <div>
      <h1>HTTP Call to DigitalOcean</h1>
      <button onClick={makeHttpRequest}>Call Sammy</button>
      {responseMessage && <p>Response: {responseMessage}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default HttpRequestToDO;
