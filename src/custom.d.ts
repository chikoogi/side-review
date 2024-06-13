declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.otf";

declare module "*.style.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.css";

/*
export * from "d3-collection";

export * from "d3-array";
export * from "d3-axis";
export * from "d3-brush";
export * from "d3-chord";
export * from "d3-color";
export * from "d3-contour";
export * from "d3-delaunay";
export * from "d3-dispatch";
export * from "d3-drag";
export * from "d3-dsv";
export * from "d3-ease";
export * from "d3-fetch";
export * from "d3-force";
export * from "d3-format";
export * from "d3-geo";
export * from "d3-hierarchy";
export * from "d3-interpolate";
export * from "d3-path";
export * from "d3-polygon";
export * from "d3-quadtree";
export * from "d3-random";
export * from "d3-scale";
export * from "d3-scale-chromatic";
export * from "d3-selection";
export * from "d3-shape";
export * from "d3-time";
export * from "d3-time-format";
export * from "d3-timer";
export * from "d3-transition";
export * from "d3-zoom";*/
