import axios from "axios";

const API_BASE_URL = "https://divar.bijak.ir";

export const getCities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/utils/get_cities`);
    return response.data.cities;  
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};
