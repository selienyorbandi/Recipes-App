import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() : JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/s/*" element={<Search/>}/>
        <Route path="/s/:searchParams" element={<Search/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
