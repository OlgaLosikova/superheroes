import React from "react";
import Card from "../Card/Card";
import data from "../../superheroes.json";

const Content = () => {
    return (
    <div className="content">
      {Object.keys(data).map((item) => {
        return (
          <Card
            title={data[item].name}
            description={data[item].info}
            imgLink={data[item].url}
            alt={data[item].name}
          />
        );
      })}
    </div>
  );
};
export default Content;
