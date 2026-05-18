import { useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";

function Recommendation() {
  const [result, setResult] = useState("");

  const getRecommendation = async () => {
    try {
      const res = await API.post("/ai/recommend");

      const output =
        res.data.choices[0].message.content;

      setResult(output);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />

      <h1>AI Recommendation</h1>

      <button onClick={getRecommendation}>
        Generate AI Recommendation
      </button>

      <br />
      <br />

      <div
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid gray",
          padding: "15px",
        }}
      >
        {result}
      </div>
    </div>
  );
}

export default Recommendation;