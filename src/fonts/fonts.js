import usuaziHosomoziWoff from "../fonts/usuazi_hosomozi.woff";
import usuaziHosomoziWoff2 from "../fonts/usuazi_hosomozi.woff2";
import { css } from "styled-components";

export const fonts = css`
  @font-face {
    font-family: "Usuazi Hosomozi";
    src: local("Usuazi Hosomozi"), local("gomarice_usuazi_hosomozi"),
      url(${usuaziHosomoziWoff}) format("woff2"),
      url(${usuaziHosomoziWoff2}) format("woff");
    font-style: normal;
    font-weight: 400;
  }
`;
