import { useDispatch, useSelector } from "react-redux";
import { setVerbrauch } from "../slice/gasSlice";
function InputForm() {
  const dispatch = useDispatch();
  const verbrauch = useSelector((state) => state.gas.verbrauch);
  const total = useSelector((state) => state.gas.total);

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        type="number"
        placeholder="Enter gas usage (kWh)"
        value={verbrauch}
        onChange={(e) => dispatch(setVerbrauch(e.target.value))}
        style={{
          padding: "10px",
          margin: "5px",
          width: "260px",
          textAlign: "center",
        }}
      />

      <p style={{ color: "gray" }}>Your usage:{total} Euro </p>
    </div>
  );
}

export default InputForm;