import { URL_API, API_KEY, TOKEN } from "../utils/constants";
export async function getCategoriesApi() {
  
  try {
    const url = `${URL_API}`;
    const params = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "x-api-key": API_KEY,
        },
      };
    const response = await fetch(url, params);
    const result = await response.json();    
    return result;
  } catch (error) {
    throw error;
  }
}