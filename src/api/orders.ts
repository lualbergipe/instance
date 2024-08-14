export async function getOrdersApi() {
  try {
    const url = process.env.REACT_APP_URL_BASE || "";        
    const headers: Record<string, string> = {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    };
    if (process.env.REACT_APP_API_KEY) {
      headers["x-api-key"] = process.env.REACT_APP_API_KEY;
    }
    const params = {
      method: "GET",
      headers: headers
    };
    const response = await fetch(url, params);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Failed to fetch the data', error);
    throw error;
  }
}
