import React from "react";

export const ColorfulMessage = (props) => {
  //console.log(props);
  const { color, children } = props;
  const contentStyle = {
    color, // プロパティ名と割り当てる変数名が一緒の時省略できる
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
