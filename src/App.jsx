import { useEffect, useRef, useState } from "react";

import "./App.css";
import Map from "./assets/components/Map";
import Form from "./assets/components/Form";
import Card from "./assets/components/Card";
import { BASE_URL, API_VERSION, API_KEY } from "./requests/APIS.js";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [position, setPosition] = useState([41.37222, 69.38167]);

  const isDomain = (input) => {
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple domain regex
    return domainPattern.test(input);
  };

  useEffect(() => {
    const getDate = async () => {
      const res = await fetch(
        `${BASE_URL}${API_VERSION}${API_KEY}&ipAddress=89.236.218.41`
      );
      const data = await res.json();
      setData(data);
      if (data.location) {
        setPosition([data.location.lat, data.location.lng]);
      }
    };
    getDate();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParam = isDomain(inputValue)
      ? `&domain=${inputValue}`
      : `&ipAddress=${inputValue}`;
    const getDate = async () => {
      const res = await fetch(
        `${BASE_URL}${API_VERSION}${API_KEY}${queryParam}`
      );
      const data = await res.json();
      setData(data);
      if (data.location) {
        setPosition([data.location.lat, data.location.lng]);
      }
    };
    getDate();
    setInputValue("");
  };

  return (
    <>
      <div className="form-control">
        <h2 className="text-white text-center pt-4 text-3xl font-semibold">
          IP Address Tracker
        </h2>
        <Form
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        {data.ip && <Card data={data} />}
      </div>
      <Map position={position} />
    </>
  );
}

export default App;
