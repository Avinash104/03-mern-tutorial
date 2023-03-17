import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LoginForm from "./components/LoginForm"
import StateForm from "./components/StateForm"
import Homepage from "./state/Homepage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<StateForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
