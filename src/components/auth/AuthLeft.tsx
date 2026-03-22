import logo from "../../assets/logo_login.svg";

export default function AuthLeft({ step, email }: any) {
  return (
    <div className="left">

      <img src={logo} className="logo" alt="logo" />

      <h1>
        {step === 1
          ? "Accede a tu cuenta"
          : "Te damos la bienvenida"}
      </h1>

      {/* STEP 1 */}
      {step === 1 && (
        <p className="sub">Ir a Gmail</p>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="email-chip">
          <span className="email-text">{email}</span>
          <span className="arrow">▾</span>
        </div>
      )}

    </div>
  );
}