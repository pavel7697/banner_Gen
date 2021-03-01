import React from "react";
import Banner from "./../Banner/Banner";
import Export from "./../Export/Export";

import { PhotoshopPicker } from "react-color";
import i from "./InputData.module.css";
import g from "./GridInput.module.css";
import b from "./../Banner/Banner.module.css";
import reactCSS from "reactcss";

const InputData = (props) => {
  const initialFormData = Object.freeze({
    imgUrl: "/mustang.png",
    text: "Bla-bla car",
    url: "http://mail.ru",
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  const [colorInfo, updateColor] = React.useState({
    displayColorPicker: false,
    color: {
      r: "248",
      g: "237",
      b: "230",
      a: "1",
    },
  });
  const [IcolorInfo, IupdateColor] = React.useState({
    displayColorPicker: false,
    color: {
      r: "19",
      g: "158",
      b: "241",
      a: "1",
    },
  });

  const [data, updateData] = React.useState({
    formData: initialFormData,
    col1: IcolorInfo.color,
    col2: colorInfo.color,
  });

  const [expBanner, updateBanner] = React.useState({ count: 0 });

  const handleChange = (e: React.FormEvent) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ColorClick = (e: React.FormEvent) => {
    updateColor({
      ...colorInfo,
      displayColorPicker: !colorInfo.displayColorPicker,
    });
  };

  const IColorClick = (e: React.FormEvent) => {
    IupdateColor({
      ...IcolorInfo,
      displayColorPicker: !IcolorInfo.displayColorPicker,
    });
  };

  const ColorClose = (e: React.FormEvent) => {
    updateColor({
      ...colorInfo,
      displayColorPicker: false,
    });
  };

  const IColorClose = (e: React.FormEvent) => {
    IupdateColor({
      ...IcolorInfo,
      displayColorPicker: false,
    });
  };

  const ColorChange = (color) => {
    updateColor({
      ...colorInfo,
      color: color.rgb,
    });
  };

  const IColorChange = (color) => {
    IupdateColor({
      ...IcolorInfo,
      color: color.rgb,
    });
  };

  const output = (e: React.EventHandler) => {};

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${colorInfo.color.r}, ${colorInfo.color.g}, ${colorInfo.color.b}, ${colorInfo.color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const Istyles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${IcolorInfo.color.r}, ${IcolorInfo.color.g}, ${IcolorInfo.color.b}, ${IcolorInfo.color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "20",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    console.log(colorInfo.color);
    console.log(IcolorInfo.color);
    updateData({
      formData: formData,
      col1: colorInfo.color,
      col2: IcolorInfo.color,
    });
    updateBanner({
      ...expBanner,
      count: expBanner.count + e,
    });
    console.log(expBanner);
    // Export.Render(formData, colorInfo.color, IcolorInfo.color);
  };

  const Render = (inputData, col1, col2) => {
    const styles = reactCSS({
      default: {
        gradient: {
          width: "300px",
          height: "400px",
          borderRadius: "15px",
          background: `linear-gradient(-45deg, rgba(${col2.r},${col2.g},${col2.b},${col2.a}), rgba(${col1.r},${col1.g},${col1.b},${col1.a}))`,
          margin: "0",
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
      <div className={b.banner}>
        <div className={b.background} style={styles.gradient} id="new-banner">
          <div className={b.link} style={styles.link}>
            <a href={inputData.url} style={styles.a}></a>
          </div>
          <img
            className={b.img}
            src={inputData.imgUrl}
            style={styles.img}
            alt=""
          />
          <div className={b.textwrapper} style={styles.textwrapper}>
            <h2 className={b.text} style={styles.text}>
              {inputData.text}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={g.bannerForm}>
      <div className={i.input}>
        <form className={i.form}>
          <p>
            <label>URL картинки</label>
            <input type="text" name="imgUrl" onChange={handleChange}></input>
          </p>
          <p>
            <label>Текст баннера</label>
            <textarea
              name="text"
              cols="60"
              rows="6"
              onChange={handleChange}
            ></textarea>
          </p>
          <p>
            <label>Ссылка баннера</label>
            <input name="url" type="text" onChange={handleChange}></input>
          </p>
          <div>
            <div style={styles.swatch} onClick={ColorClick}>
              <div style={styles.color} />
            </div>
            {colorInfo.displayColorPicker ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={ColorClose} />
                <PhotoshopPicker
                  color={colorInfo.color}
                  onChange={ColorChange}
                />
              </div>
            ) : null}

            <div style={Istyles.swatch} onClick={IColorClick}>
              <div style={Istyles.color} />
            </div>
            {IcolorInfo.displayColorPicker ? (
              <div style={Istyles.popover}>
                <div style={Istyles.cover} onClick={IColorClose} />
                <PhotoshopPicker
                  color={IcolorInfo.color}
                  onChange={IColorChange}
                />
              </div>
            ) : null}
          </div>
          <p>
            <button value="Просмотр" onClick={handleSubmit}>
              Просмотр
            </button>
          </p>
        </form>
        {/* {{(()=>{
          if (data.col1==) {
            return(
              <Banner formData={data.formData} col1={data.col1} col2={data.col2} />
            )
          }
        })()}}         */}
        <Banner
          formData={data.formData}
          col1={data.col1}
          col2={data.col2}
          Render={Render}
        />
        <Export
          formData={data.formData}
          col1={data.col1}
          col2={data.col2}
          Render={Render}
        />
      </div>
    </div>
  );
};

export default InputData;
