const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berear ${token}`,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    alert("an error occured");
  }
};

export { postData };
 