import React, { Component } from "react";
import "../../js/custom.js";

function Footer() {
  return (
    <div
      className="copyright"
      style={{
        textAlign: "center",
        background: "transparent !important",
        zIndex: 10,
        position: "absolute",
        transform: "translateY(-280%)",
        left: 0,
        right: 0,
        margin: "auto",
        color: "gray",
        fontWeight: "lighter",
      }}
    >
      Copyright &copy; 2021-2022 Portfolio, Hong Hyein
    </div>
  );
}
export default Footer;
