import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="posts" element={<PostPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
