import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/icon/favicon.png";
import Header from "./Header/Header";
import MobileHeader from "./Header/MobileHeader";
import Footer from "./Footer";

export default function Layout({ title, children, currentPage }) {
  console.log(currentPage);
  return (
    <Fragment>
      <Helmet>
        <title>{title ? title + "- Teknesis" : "Teknesis"}</title>
        <link rel="shortcut icon" type="image/png" href={favicon}></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.1/owl.carousel.min.js" />
      </Helmet>
      <Header currentPage={currentPage} />
      <MobileHeader currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
