import React from "react";

export default function Error() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <img 
        src="./error.webp" 
        alt="404 Not Found" 
        width={"3000px"}
        height={"1000px"}
        style={{ width: "50%", maxWidth: "400px" }} 
      />
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
