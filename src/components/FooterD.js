import React from "react";
import { useState, useEffect } from "react";
export default function Footer() {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);
  return (
    <>
      <footer style={{ textAlign: "center", paddingBottom: "20px" }}>
        {" "}
        &copy; {fullYear} RTO Management
      </footer>
    </>
  );
}
