"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; 

const Map = ({ onSelectOrigin }) => {
  const mapRef = useRef(null); 

  useEffect(() => {
    const map = L.map(mapRef.current).setView([35.6892, 51.3890], 13); // Tehran coordinates

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      console.log("Latitude:", lat, "Longitude:", lng); 
      onSelectOrigin({ lat, lng }); 
    });

    return () => map.remove();
  }, [onSelectOrigin]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-red-600">بیجک</h1>
        <div ref={mapRef} className="relative h-96 w-full bg-gray-200"></div>
        <button
          onClick={() => console.log("مبدا انتخاب شد")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          انتخاب مبدا
        </button>
      </div>
    </div>
  );
};

export default Map;
