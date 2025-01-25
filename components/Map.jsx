"use client";
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; 
import Header from "./ui/Header";

const Map = ({ onSelectOrigin, onShowForm }) => {
  const mapRef = useRef(null); 
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([35.6892, 51.3890], 13); // Tehran coordinates

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      setSelectedCoordinates({ lat, lng });
      console.log("Latitude:", lat, "Longitude:", lng); 
    });

    return () => map.remove();
  }, []);

  const handleButtonClick = () => {
    if (selectedCoordinates) {
      onSelectOrigin(selectedCoordinates);
      onShowForm();
    } else {
      alert("لطفا ابتدا یک موقعیت را بر روی نقشه انتخاب کنید.");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <Header className="text-xl font-bold mb-4" title=" بیجک " />
        <div ref={mapRef} className="relative h-96 w-full bg-gray-200"></div>
        <button
          onClick={handleButtonClick}
          className={`mt-4 px-4 py-2 rounded ${selectedCoordinates ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          disabled={!selectedCoordinates}
        >
          انتخاب مبدا
        </button>
      </div>
    </div>
  );
};

export default Map;
