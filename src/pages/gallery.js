import { Box } from "@mui/material";

import React from "react";
import GallaryImageList from "../components/GallaryImageList/GallaryImageList";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import Footer from "../components/FooterUpdated/Footer";
import { useHistory, useLocation } from "react-router-dom";
import "./Project.css"
import { MainSearchBar } from "../components/intro";

function gallary(props) {


    return (
        <>
            <div style={{ backgroundColor: "#ffffe0" }}>
                <div> <div>
                    <NavBarUpdated2></NavBarUpdated2>
                </div></div>
            </div>
            <Box className="gallery-connt">
                <SEO title="Ssebowa – Gallery" />
                <div className="gellary-back">
                    <div className="mains-searchbar">
                        <MainSearchBar></MainSearchBar>
                    </div>
                    <h1 className="page-titles text-center">Our Gallery</h1>
                    <p className="page-headers invisible">
                        Welcome to Our Gallery
                    </p>
                </div>
                <div>
                    <h1 className="sse-galler">
                        Have A look At <span style={{ color: "#3FAE04" }}>Ssebowa’s</span> Gallery
                    </h1>
                </div>
                <GallaryImageList></GallaryImageList>
                <Footer></Footer>
                <StickyChatBot />
                <ScrollToTop></ScrollToTop>
            </Box >

        </>
    );
}

export default gallary;
