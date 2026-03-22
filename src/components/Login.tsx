import { useState } from "react";
import "../styles/login.css";

import AuthLayout from "./layout/AuthLayout";
import AuthLeft from "./auth/AuthLeft";
import AuthRight from "./auth/AuthRight";

export default function Login() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout>

      <AuthLeft step={step} email={email} />

      <AuthRight
        step={step}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        setStep={setStep}
      />

    </AuthLayout>
  );
}