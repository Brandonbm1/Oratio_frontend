// const baseUrl = `http://localhost:4000`;
const baseUrl = `https://oratiobackend.up.railway.app`;
export const useModule = (token) => {
  const getAll = async (url) => {
    const response = await fetch(`${baseUrl}/api/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
    const res = await response.json();

    return res;
  };
  const create = async (bodyContent, url) => {
    url = url === "users" ? "auth/register" : `api/${url}`;
    // console.log(JSON.stringify(bodyContent));
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(bodyContent),
    });
    const res = await response.json();
    return res;
  };
  const deleteEl = async (url, id) => {
    url = `api/${url}`;
    await fetch(`${baseUrl}/${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
  };
  const createGif = async (word, address) => {
    try {
      const response = await fetch(`${baseUrl}/api/words/${word}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
      });
      const idWord = await response.json();
      // console.log(idWord, address);

      const result = await fetch(`${baseUrl}/api/gif`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify({
          address,
          idWord: idWord.id,
          description: null,
        }),
      });
      const res = await result.json();
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
  };
  const createWord = async (data, url) => {
    try {
      const { name, nameCategory, idUser } = data;
      const response = await fetch(`${baseUrl}/api/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify({ name, nameCategory, idUser }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getGifByWord = async (word) => {
    try {
      console.log(word);
      const response = await fetch(`${baseUrl}/api/gif/${word}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
      });
      const res = await response.json();

      return res;
    } catch (error) {
      console.error(error);
    }
  };
  return { getAll, create, deleteEl, createGif, createWord, getGifByWord };
};
