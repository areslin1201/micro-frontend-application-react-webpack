import React, { lazy, Suspense } from "react";

const Button = lazy(() => import("PROJECT_CHILD/button"));

const App = () => {
  return (
    <div className="App">
      <p>Main 預覽畫面</p>

      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <Button
            handleClick={() => console.log("show")}
            value="show"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default App;