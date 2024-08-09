import React from "react";
import "./MapView.css";

function MapView() {
  return (
    <section className="map-view">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8341576880f24687c6fa5347e844f1e8051b11f9e1fab33bb02bd9fd777915a?apiKey=795a4821ae2d43fd8710fcb3d714d4fc"
        alt="Map view of the location"
        className="map-view-image"
      />
    </section>
  );
}

export default MapView;
