"use client";
import { useState } from "react";
import Map from "../components/Map";
import Form from "../components/Form";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [originCoordinates, setOriginCoordinates] = useState(null);

  const handleSelectOrigin = (coordinates) => {
    setOriginCoordinates(coordinates);
    setShowForm(true);
  };

  return (
    <div>
      {showForm ? (
        <Form originCoordinates={originCoordinates} />
      ) : (
        <Map onSelectOrigin={handleSelectOrigin} />
      )}
    </div>
  );
};

export default HomePage;
