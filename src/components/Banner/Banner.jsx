import React from "react";
import b from "./Banner.module.css";
import reactCSS from "reactcss";
import ReactDOMServer from "react-dom/server";

const Banner = (props) => {
  return (
    <div>
      {props.Render(props.formData, props.col2, props.col1)}
      <div>
        {(e) => {
          props.func(Math.random());
        }}
      </div>
      <div>
        {/* {console.log(
          ReactDOMServer.renderToString(
            props.Render(props.formData, props.col2, props.col1)
          )
        )} */}
        {console.log(document.getElementById("new-banner"))}
      </div>
    </div>
  );
};

export default Banner;
