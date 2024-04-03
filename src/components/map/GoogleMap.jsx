const { REACT_APP_API_KEY } = process.env;

import React, { useRef, useEffect } from "react";

const GoogleMap = ({ markers }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 }, // Початкові координати центру карти
        zoom: 2, // Початковий зум
      });

      // Додайте мітки до карти
      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map: map,
          title: marker.title,
        });
      });
    });
  }, [markers]);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }} />;
};

export default GoogleMap;
