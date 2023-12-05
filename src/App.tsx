import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import UncontrolledForm from "./UncontroledForm/UncontroledForm";
import ReactHookForm from "./ReactHookForm/ReactHookForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      <Route
        path="/react-hook-form"
        element={
          <div>
            {" "}
            <ReactHookForm />{" "}
          </div>
        }
      />
      <Route path="*" element={<div> no such page </div>} />
    </Routes>
  );
}

export default App;
