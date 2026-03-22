import Footer from "./Footer";

export default function AuthLayout({ children }: any) {
  return (
    <div className="page">
      <div className="box">
        {children}
      </div>

      <Footer />
    </div>
  );
}