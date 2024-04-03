import React from "react";
import Card from "../card/Card";
import GoogleMap from "../map/GoogleMap";

import data from "../../datа.json";

import styles from "./list.module.css";

const List = () => {
  const markers = [{ lat: 40.7128, lng: -74.006, title: "New York" }];
  return (
    <div className={styles.container}>
      {data?.map((item) => (
        <Card key={item.id} imageItem={item} />
      ))}
      <GoogleMap markers={markers} />
    </div>
  );
};

export default List;
