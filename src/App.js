import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllEmployees from './pages/AllEmployees'
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllEmployees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
