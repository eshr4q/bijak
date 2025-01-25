"use client";
import React, { useState, useEffect } from "react";
import InputField from "./ui/InputField";
import DropDown from "./ui/DropDown";
import Buttons from "./ui/Buttons";
import Header from "./ui/Header";
import { getCities } from "@/components/services/cities";
import { calculatePrice } from "@/components/services/singlePrice";

const Form = ({ originCoordinates, onBackToMap }) => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [count, setCount] = useState("");
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesData = await getCities();
        setCities(citiesData);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };
    fetchCities();
  }, []);

  const handleCalculate = async () => {
   
    const payload = {
      lng: originCoordinates?.lng || 0,
      lat: originCoordinates?.lat || 0,
      length: parseInt(length, 10),
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      weight: parseInt(weight, 10),
      count: parseInt(count, 10),
      value: parseInt(value.replace(/,/g, ""), 10),
      destination_city_id: parseInt(city, 10),
    };


    console.log("Form Fields - Length:", length);
    console.log("Form Fields - Width:", width);
    console.log("Form Fields - Height:", height);
    console.log("Form Fields - Weight:", weight);
    console.log("Form Fields - Count:", count);
    console.log("Form Fields - Value:", value);
    console.log("Form Fields - City:", city);
    console.log("Payload:", payload);

 
    if (
      !length ||
      !width ||
      !height ||
      !weight ||
      !count ||
      !value ||
      !city
    ) {
      alert("لطفا همه فیلدها را پر کنید.");
      return;
    }

    try {
      
      const price = await calculatePrice(payload);
      alert(`هزینه ارسال: ${price.cost} تومان`);
    } catch (error) {
      console.error("Error calculating price:", error);
      alert("محاسبه قیمت با خطا مواجه شد!");
    }
  };

  

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <Header title="اطلاعات کالا" />
        <form>
          <InputField
            label="طول (سانتی‌متر)"
            placeholder="مثلا ۵۰ سانتی‌متر"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <InputField
            label="عرض (سانتی‌متر)"
            placeholder="مثلا ۴۰ سانتی‌متر"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <InputField
            label="ارتفاع (سانتی‌متر)"
            placeholder="مثلا ۲۰ سانتی‌متر"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <InputField
            label="وزن (کیلوگرم)"
            placeholder="مثلا ۱۰ کیلوگرم"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <InputField
            label="تعداد"
            placeholder="مثلا ۱ عدد"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <InputField
            label="ارزش کالا (تومان)"
            placeholder="مثلا ۲,۰۰۰,۰۰۰"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <DropDown
            label="شهر مقصد"
            options={cities.map(city => city.city_name)}  
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <Buttons text="محاسبه قیمت" onClick={handleCalculate} variant="primary" />
            <Buttons text="انتخاب مجدد مبدا" onClick={onBackToMap} variant="secondary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
