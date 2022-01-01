import React from "react";
import styles from "../../styles/Embla.module.css"

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`${styles.embla__dot} ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);