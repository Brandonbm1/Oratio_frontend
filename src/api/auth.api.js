const baseAuthUrl = `${process.env.baseUrl}/auth`;
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
  const response = await fetch(`${baseAuthUrl}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
