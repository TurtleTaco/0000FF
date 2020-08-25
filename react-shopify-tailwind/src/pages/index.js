import React from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

const Index = () => (
    <html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <body>
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
    </html>
  )
  
  export default Index