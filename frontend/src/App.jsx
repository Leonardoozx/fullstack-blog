import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./pages/Feed"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/signUp" element={ <SignUp /> } />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
