import React from "react";
import Card from "./Card";

import data from "../datа.json";

const List = () => {
  return (
    <div>
      {data?.map((item) => (
        <Card rey={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
