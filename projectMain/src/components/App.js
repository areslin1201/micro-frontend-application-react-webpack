import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import Home from '../pages/Home'
import Other from '../pages/Other'

const App = () => {
  return (
    <BrowserRouter>
      <p>Main 預覽畫面</p>
      <Link to="/">home</Link> /
      <Link to="/other">other</Link> /
      <Link to="/admin">admin</Link> /

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
        <Route
          path="admin"
          element={
            <div>
              <h1>Layout</h1>
              <Outlet />
            </div>
          }
        >
          <Route
            path="one"
            element={<>one</>}
          />
          <Route
            path="two"
            element={<>two</>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;