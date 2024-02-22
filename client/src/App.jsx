import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<Login/>}
        />
        <Route
          path="registro"
          element={<Register/>}
        />
        <Route 
          path="home"
          element={<Home/>}
        />
      </Routes>
    </>
  )
}

export default App
