import React from "react";
import Card from "../card/Card";

import data from "../../datа.json";

import styles from "./list.module.css";

const List = () => {
  return (
    <div className={styles.container}>
      {data?.map((item) => (
        <Card key={item.id} imageItem={item} />
      ))}
    </div>
  );
};

export default List;
