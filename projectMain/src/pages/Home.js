import React, { lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
const Button = lazy(() => import("PROJECT_CHILD/button"));

const Home = () => {
  return (
    <>
      <p>home</p>


      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <Button
            handleClick={() => console.log("show")}
            value="show"
          />
        </Suspense>
      </div>
    </>
  )
}

export default Home;