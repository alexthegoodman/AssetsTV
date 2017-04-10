import React from "react";


const Grid = props => (
<svg width={props.width || 30} height={props.height || 30} viewBox="0 0 30 30">
  <path d="M5 5h8v8H5V5zm0 12h8v8H5v-8zM17 5h8v8h-8V5zm0 12h8v8h-8v-8zM6 6h6v6H6V6zm0 12h6v6H6v-6zM18 6h6v6h-6V6zm0 12h6v6h-6v-6z" fill="#000" fill-rule="evenodd"></path></svg>
);

export default Grid;
