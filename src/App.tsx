import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "@/routes/Login/Login.tsx";

function App() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        document.documentElement.classList.add(savedTheme)
    }

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
