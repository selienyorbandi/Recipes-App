import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Categories from "./pages/Categories/Categories";
import Filtered from "./pages/Filtered/Filtered";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";

import "./App.css";

function App() : JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/s/*" element={<Search/>}/>
        <Route path="/s/:searchParams" element={<Search/>}/>
        <Route path="/categories" element={<Categories/>} />
        <Route path="/c/:params" element={<Filtered/>} />
        <Route path="/a/:params" element={<Filtered/>} />
        <Route path="/r/:id" element={<Recipe/>} />
      </Routes>
    </Layout>
  );
}

export default App;
