import "./App.css";
import { Count } from "./components/Count";
import { TextInput } from "./components/TextInput";
import { CheckBox } from "./components/CheckBox"
function App() {
  return (
    <div align="center" marginTop="20px">
      <Count />
      <TextInput />
      <CheckBox />
    </div>
  );
}

export default App;
