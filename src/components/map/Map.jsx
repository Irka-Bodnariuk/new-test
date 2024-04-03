import React, { useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import styles from "./map.module.css";
import { defaultTheme } from "./Theme";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  styles: defaultTheme,

  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  fullscreenControl: false,
  disableDoubleClickZoom: false,
  scrollwheel: false,
  keyboardShortcuts: false,
  clickableIcons: false,
  rotateControl: false,
  streetViewControl: false,
};

const Map = ({ center, markers }) => {
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={styles.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            icon={{ url: "./images/mark.svg" }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
