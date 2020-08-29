import React, {useEffect} from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import HeaderStyles from "../components/Header.module.css";

const isWindowContext = typeof window !== "undefined";

const Index = () => {

    // useEffect(function mount() {
    //     function onScroll() {
    //         var scroll = window.pageYOffset; 
    //         var pageHeaderImage = document.getElementById("header-image-container");
    //         var pageHeaderOptions = document.getElementById("header-options")
          
    //         if(scroll > 550){
    //             //pageHeaderImage.style["display"] = "none";
    //             pageHeaderImage.classList.remove(HeaderStyles.headerOpened);
    //             pageHeaderImage.classList.add(HeaderStyles.headerClosed);
    //             pageHeaderOptions.style["background-color"] = "black";
    //             pageHeaderOptions.style["color"] = "white";
    //         } else if(scroll == 0){
    //             //pageHeaderImage.style["display"] = "block";
    //             pageHeaderImage.classList.remove(HeaderStyles.headerClosed);
    //             pageHeaderImage.classList.add(HeaderStyles.headerOpened);
    //             pageHeaderOptions.style["background-color"] = "tra";
    //             pageHeaderOptions.style["color"] = "black";
    //         } 
    //     }
    
    //     window.addEventListener("scroll", onScroll);    
    
    //     return function unMount() {
    //       window.removeEventListener("scroll", onScroll);
    //     };
    //   });

    return (<html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <body id="body">
        <div id="root">
            <div id="container" className="min-w-full bg-grey-500 ">
                <div className="text-center py-2 bg-gray-400 text-black text-xs underline FrontPageShopButtonFont">
                {" "}
                Covid-19 Store Update{" "}
                </div>
                <Header />
                <MainPage />
            </div>
        </div>
    </body>
    </html>)

    }


  
  export default Index