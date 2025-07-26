import React from "react";

const Showcase: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 pixel-font bg-background text-foreground">
      <h1 className="text-2xl ">Showcase Page</h1>
      <p className="mt-4">
        On this page will be showcased projects that have used Pixelact UI.
      </p>
    </div>
  );
};

export default Showcase;
