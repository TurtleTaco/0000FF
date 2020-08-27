import React, { useState, useEffect } from "react";
//import db from "./FirebaseConfig";
import HeaderItem from "./HeaderItem";

function Collage() {
  // {key, name, url}
  var [items, setItems] = useState([]);
  
  return (
    <div>
      <div
        className="flex justify-center text-gray-800 rounded-xl relative"
        style={{
          width: `100vw`,
        }}
      >
        <div className="px-8 w-full">
          <div className="mb-3">
            <h1 className="text-2xl font-bold">Just In</h1>
            <div className="flex">
              <p className="text-l text-gray-500 uppercase font-bold">
                FALL WINTER 20 LOOKBOOK
              </p>
              <div className="flex flex-1 flex-col justify-center">
                <HeaderItem
                  title="View All"
                  className="float-right text-xs text-gray-500 uppercase font-bold"
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap"
            style={{ padding: `1px 1px 1px 0px` }}
          >
            <div
              className="flex-1 min-w-full sm:min-w-full md:min-w-0"
              style={{ width: `50vw`, margin: `1px 1px 1px 0px` }}
            >
              <h1
                className="z-10 text-white leading-tight text-3l p-4 FrontPageShopButtonFont"
                style={{
                  position: `absolute`,
                  color: `black`,
                }}
              >
                NEW ARRIVALS
              </h1>
              <img
                href="#"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/left_aw.jpg?v=1597546758"
                className="z-0 block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
              ></img>
            </div>

            <div className="mb-3 flex align-middle min-w-full text-black text-2xl pt-4 sm:min-w-full md:hidden">
              <div className="flex flex-1">
                <h1 className="text-l text-gray-500">Shop</h1>
                <h1 className="text-2xl font-bold">Women</h1>
              </div>
              {/* Tip for yinhaotian: this implementation centers the child vertically in a flex container, so niu bi */}
              <div className="flex flex-1 flex-col justify-center">
                <HeaderItem className="" title="View All" style={{}} />
              </div>
            </div>

            <div
              className="flex flex-1 min-w-full sm:min-w-full md:min-w-0"
              style={{ width: `50vw`, margin: `1px 0px 1px 1px` }}
            >
              <div className="w-full" style={{}}>
                <div>
                  <h1
                    className="z-10 text-white leading-tight text-3l p-4 FrontPageShopButtonFont"
                    style={{
                      position: `absolute`,
                      color: `black`,
                    }}
                  >
                    HANDBAG
                  </h1>
                  <img
                    href="#"
                    alt=""
                    className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                    src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/aw_handbag.jpg?v=1597625369"
                    style={{ marginBottom: `2px` }}
                  ></img>
                </div>

                <div>
                  <h1
                    className="z-10 text-white leading-tight text-3l p-4 FrontPageShopButtonFont"
                    style={{
                      position: `absolute`,
                      color: `black`,
                    }}
                  >
                    SHOES
                  </h1>
                  <img
                    href="#"
                    alt=""
                    className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                    src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/aw_shoes.jpg?v=1597626333"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 w-full">
        <div className="mb-3 flex align-middle min-w-full text-black text-2xl pt-4 sm:min-w-full md:hidden">
          <div className="flex flex-1">
            <h1 className="text-l text-gray-500">Shop</h1>
            <h1 className="text-2xl font-bold">Men</h1>
          </div>
          {/* Tip for yinhaotian: this implementation centers the child vertically in a flex container, so niu bi */}
          <div className="flex flex-1 flex-col justify-center">
            <HeaderItem className="" title="View All" style={{}} />
          </div>
        </div>

        <div className="flex flex-wrap" style={{ padding: `1px 1px 1px 0px` }}>
          <div
            className="flex-1 min-w-full sm:min-w-full md:min-w-0"
            style={{ width: `50vw`, margin: `1px 1px 1px 0px` }}
          >
            <h1
              className="z-10 text-white leading-tight text-3l p-4 FrontPageShopButtonFont"
              style={{
                position: `absolute`,
                color: `black`,
              }}
            >
              BAGS
            </h1>
            <img
              href="#"
              alt=""
              src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/right_top_aw.jpg?v=1597546759"
              className="z-0 block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
            ></img>
          </div>

          <div
            className="flex-1 min-w-full sm:min-w-full md:min-w-0"
            style={{ width: `50vw`, margin: `1px 1px 1px 0px` }}
          >
            <h1
              className="z-10 text-white leading-tight text-3l p-4 FrontPageShopButtonFont"
              style={{
                position: `absolute`,
                color: `black`,
              }}
            >
              SHIRTS
            </h1>
            <img
              href="#"
              alt=""
              src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/right_bottom_aw.jpg?v=1597546759"
              className="z-0 block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
