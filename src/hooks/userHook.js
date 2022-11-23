const useUser = () => {
  const Login = async (data) => {
    console.log("Funcion LOGIN");
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: data,
      headers: {
        "content-type": "application/json",
      },
    });
    return response;
  };

  return { Login };
};

export default useUser;
