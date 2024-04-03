import React from "react";
import Card from "../card/Card";

import data from "../../datа.json";

import styles from "./list.module.css";
import Map from "../map/Map.jsx";
import { useJsApiLoader } from "@react-google-maps/api";

const { REACT_APP_API_KEY } = process.env;

const List = () => {
  const defaultCenter = {
    lat: 25.081,
    lng: 55.257,
  };
  const markers = [
    { lat: 25.081, lng: 55.257 },
    { lat: 25.0973, lng: 55.3066 },
    { lat: 25.0975, lng: 55.3068 },
    { lat: 25.0977, lng: 55.307 },
    { lat: 25.0979, lng: 55.3072 },
    { lat: 25.0981, lng: 55.3074 },
  ];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: REACT_APP_API_KEY,
  });

  return (
    <div className={styles.container}>
      {data?.map((item) => (
        <Card key={item.id} imageItem={item} />
      ))}
      {isLoaded ? (
        <Map center={defaultCenter} markers={markers} />
      ) : (
        <div className={styles.wrap}></div>
      )}
    </div>
  );
};

export default List;
