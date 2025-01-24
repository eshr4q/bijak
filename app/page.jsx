"use client";
import { useState } from "react";
import Map from "../components/Map";
import Form from "../components/Form";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSelectOrigin = () => {
    setShowForm(true);
  };

  return (
    <div>
      {showForm ? <Form /> : <Map onSelectOrigin={handleSelectOrigin} />}
    </div>
  );
};

export default HomePage;
