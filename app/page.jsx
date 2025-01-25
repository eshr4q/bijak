"use client";
import { useState } from "react";
import Map from "../components/Map";
import Form from "../components/Form";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [originCoordinates, setOriginCoordinates] = useState(null);

  const handleSelectOrigin = (coordinates) => {
    setOriginCoordinates(coordinates);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      {showForm ? (
        <Form originCoordinates={originCoordinates} />
      ) : (
        <Map onSelectOrigin={handleSelectOrigin} onShowForm={handleShowForm} />
      )}
    </div>
  );
};

export default HomePage;
