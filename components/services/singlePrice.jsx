import axios from "axios";

const API_BASE_URL = "https://divar.bijak.ir";


export const calculatePrice = async (data) => {
  try {
    const response = await axios.post(
     `${API_BASE_URL}/utils/single_price`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error calculating price:", error);
    throw error;
  }
};
