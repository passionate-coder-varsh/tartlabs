import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ position: "absolute",
                    width: "390px",
                    height: "26px",
                    left: "800px",
                    top: "30px",
                    fontfamily: "Sen",
                    fontstyle: "normal",
                    fontweight: "normal",
                    fontsize: "16px",
                    lineheight: "146.1%",
                    textalign: "center",
                    color: "#FFFFFF" }}>
        © 2021 MuSigPro, Inc. All Rights Reserved.
      </h1>
    </Box>
  );
};
export default Footer;