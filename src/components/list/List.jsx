import React from "react";
import Card from "../card/Card";

import data from "../../datа.json";

import styles from "./list.module.css";
import Map from "../map/Map.jsx";
import { useJsApiLoader } from "@react-google-maps/api";

const { REACT_APP_API_KEY } = process.env;

const List = () => {
  const defaultCenter = {
    lat: 25.08576,
    lng: 55.25194,
  };
  const markers = [
    { lat: 25.085485, lng: 55.179581 },
    { lat: 25.08051, lng: 55.20018 },
    { lat: 25.038213, lng: 55.137009 },
    { lat: 25.023281, lng: 55.213913 },
    { lat: 25.146414, lng: 55.20636 },
    { lat: 25.236299, lng: 55.394724 },
    { lat: 25.324465, lng: 55.358331 },
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
