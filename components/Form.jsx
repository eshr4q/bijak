"use client";
import React, { useState } from "react";
import InputField from "./ui/InputField";
import DropDown from "./ui/DropDown";
import Buttons from "./ui/Buttons";
import Header from "./ui/Header";

const Form = ({ onBackToMap }) => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [count, setCount] = useState("");
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  
  const cities = ["تهران", "اصفهان", "مشهد", "شیراز"]; 

  const handleCalculate = () => {
    console.log({ length, width, height, weight, count, value, city });
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
            options={cities}
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
