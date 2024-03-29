import React from "react";
import ReactCardCarousel from "react-card-carousel";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "./Data";

export default function ProductCarousel() {
  const CARD_STYLE = {
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#000",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box",
    flexDirection: "column"
  };
  return (
    <div>
      <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
        {Data.map((item, index) => (
          <div key={index} style={CARD_STYLE}>
            <img
              src={item.thumbnail}
              style={{ maxWidth: "100%" }}
              alt="arr album"
            />
            <small>ArtistName : {item.artistName}</small>
            <small>ArtistName : {item.albumName}</small>
          </div>
        ))}
      </ReactCardCarousel>
    </div>
  );
}
