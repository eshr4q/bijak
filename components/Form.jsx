"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import InputField from "./ui/InputField";
import DropDown from "./ui/DropDown";
import Buttons from "./ui/Buttons";
import Header from "./ui/Header";
import { getCities } from "@/components/services/cities";
import { calculatePrice } from "@/components/services/singlePrice";

Modal.setAppElement('body'); 

const Form = ({ originCoordinates, onBackToMap }) => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [count, setCount] = useState("");
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

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

    if (
      !length ||
      !width ||
      !height ||
      !weight ||
      !count ||
      !value ||
      !city
    ) {
      setModalContent("لطفا همه فیلدها را پر کنید.");
      setIsModalOpen(true);
      return;
    }

    try {
      const price = await calculatePrice(payload);
      setModalContent(`هزینه ارسال: ${price.cost} تومان`);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error calculating price:", error);
      setModalContent("محاسبه قیمت با خطا مواجه شد!");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm sm:max-w-md bg-white p-4 rounded-lg shadow-md">
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
            onChange={(value) => setCity(value)}
          />
          <div className="flex justify-between mt-4">
            <Buttons
              text="محاسبه قیمت"
              onClick={handleCalculate}
              variant="primary"
            />
            <Buttons
              text="انتخاب مجدد مبدا"
              onClick={onBackToMap}
              variant="secondary"
            />
          </div>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <p className="text-lg text-gray-700">{modalContent}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            تایید
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
