import InputForm from "./components/InputForm";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 Gasrechner</h1>
      <p style={{ color: "gray" }}>احسب استهلاك الغاز الشهري بسهولة</p>
      <InputForm />
    </div>
  );
}

export default App;
