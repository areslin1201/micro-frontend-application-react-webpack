import React from 'react';
import Button from './Button';

export default function MainApp() {
  return (
    <>
      <p>預覽畫面</p>

      <Button
        handleClick={() => console.log("work")}
        value="Click"
      />
    </>
  );
}
