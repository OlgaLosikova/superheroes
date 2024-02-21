import React from "react";
import Card from "../Card/Card";
import data from "../../superheroes.json";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      {
      Object.keys(data).map((item) => {
        return (
          <Card
            key={data[item].id}
            title={data[item].name}
            description={data[item].info}
            imgLink={data[item].url}
            alt={data[item].name}
          />
        );
      })
      }
    </div>
  );
};
export default Content;
