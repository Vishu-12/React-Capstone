import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Genre from "./pages/Genre";
import Info from "./pages/Info";
import Movies from "./pages/Movies";
import NotFound from "./pages/404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/genre" element={<Genre />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
