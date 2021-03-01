import React from "react";
import d from "./Export.module.css";
import reactCSS from "reactcss";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

const Export = (props) => {
  const example = () => {
    const styles = reactCSS({
      default: {
        gradient: {
          width: "300px",
          height: "400px",
          borderRadius: "15px",
          background: `linear-gradient(-45deg, rgba(241, 112, 19, 1), rgba(241,112,19,1))`,
        },
      },
    });
    return (
      <div className="Banner_background" style={styles.gradient}>
        <div className="Banner_link">
          <a href="http://mail.ru"></a>
        </div>
        <img className="Banner_img" src="/mustang.png" alt="" />
        <div className="Banner_textwrapper">
          <h2 className="Banner_text">text</h2>
        </div>
      </div>
    );
  };

  const handlePng = () => {
    const NewInput = document.getElementById("new-banner");
    console.log(NewInput);
    htmlToImage.toPng(NewInput, { width: 300, height: 400 }).then((canvas) => {
      window.saveAs(canvas, "banner.png");
    });
  };

  const handleJSON = () => {};

  const styles = reactCSS({
    default: {
      gradient: {
        width: "300px",
        height: "400px",
        borderRadius: "15px",
        background: `linear-gradient(-45deg, rgba(${props.col2.r},${props.col2.g},${props.col2.b},${props.col2.a}), rgba(${props.col1.r},${props.col1.g},${props.col1.b},${props.col1.a}))`,
      },
      link: {
        width: "300px" /* Ширина слоя */,
        height: "400px" /* Высота слоя */,
        position: "absolute",
        zIndex: "1",
      },
      a: {
        display: "block" /* Ссылка как блочный элемент */,
        textalign: "center" /* Выравнивание по центру */,
        height: "100%" /* Высота на весь слой */,
        color: "rgba(102, 102, 102, 0)" /* Цвет ссылки */,
        zIndex: "10000",
      },
      background: {
        width: "300px" /* Ширина слоя */,
        height: "400px" /* Высота слоя */,
        position: "relative",
        overflow: "hidden",
      },
      img: {
        position: "inherit",
        top: "20px",
        left: "50px",
        height: "55%",
        zIndex: "0",
      },
      text: {
        textalign: "left",
        top: "10px",
        left: "10px",
        height: "30%",
        fontsize: "22pt",
        color: "white",
        position: "relative",
      },
      textwrapper: {
        width: "90%",
        height: "40%",
        marginleft: "20px",
        position: "relative",
        overflow: "hidden",
      },
    },
  });

  return (
    <div className={d.exportwrapper}>
      <div>
        <button onClick={handlePng}>Generate PNG</button>
      </div>
      <div>
        <button onClick={handleJSON}>Export JSON</button>
      </div>
      <div>export json</div>
      <div>copy to buffer jsx </div>
    </div>
  );
};

export default Export;
