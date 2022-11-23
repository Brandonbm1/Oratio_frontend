const baseAuthUrl = `https://oratiobackend.up.railway.app/auth`;
export const login = async (credentials) => {
  const response = await fetch(`${baseAuthUrl}/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const register = async (user) => {
  console.log(user);
  console.log(baseAuthUrl);
  const response = await fetch(`${baseAuthUrl}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const isAdmin = async (token) => {
  const response = await fetch(`${baseAuthUrl}/validate`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
  });
  return await response.json();
};
