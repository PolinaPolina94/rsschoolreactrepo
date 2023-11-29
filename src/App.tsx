import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import UncontrolledForm from "./UncontroledForm/UncontroledForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      <Route path="/react-hook-form" element={<div> react-hook-form </div>} />
      <Route path="*" element={<div> no such page </div>} />
    </Routes>
  );
}

export default App;
