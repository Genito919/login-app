export const sendLogin = async (email: string, password: string) => {
  const res = await fetch("https://login-app-production-b48f.up.railway.app/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};