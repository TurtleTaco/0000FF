import React, { useState, useEffect } from "react";
import db from "./FirebaseConfig";
import HeaderItem from "./HeaderItem";

function Collage() {
  // {key, name, url}
  var [items, setItems] = useState([]);

  // useEffect will only run once when the Collage component is being loaded
  // Fetch from firebase
  useEffect(() => {
    // Fetch database from firebase
    const unsubscribe = db
      .collection("items")
      .onSnapshot((snapshot) =>
        setItems(snapshot.docs.map((doc) => doc.data()))
      );

    // cleanup function
    return () => {
      // detach the database listener
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div
        className="bg-white flex justify-center text-gray-800 rounded-xl relative"
        style={{
          width: `100vw`,
        }}
      >
        <div className="pt-6 px-8 w-full">
          <div className="mb-3">
            <h1 className="text-3l font-bold">Just In</h1>
            <div className="flex">
              <p className="text-xs text-gray-500 uppercase font-bold">
                CELEBRATE YOUR VALENTINE
              </p>
              <div className="flex-1">
                <HeaderItem
                  title="View All"
                  className="float-right text-xs text-gray-500 uppercase font-bold"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div
              className="flex-1 min-w-full mb-3 sm:min-w-full md:min-w-0"
              style={{ width: `46.5vw` }}
            >
              {items.map((item, index) => (
                <img
                  href="#"
                  key={item.key}
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IMG_4217.JPG?v=1597272366"
                  className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                >
                  {/* <h1
                    className="text-lg font-bold text-white leading-tight"
                    style={{
                      position: `absolute`,
                      bottom: `10px`,
                      left: `5px`,
                    }}
                  >
                    殷昊天 50¥/次
                  </h1> */}
                </img>
              ))}
            </div>

            <div
              className="flex flex-1 mb-3 min-w-full sm:min-w-full md:min-w-0"
              style={{ width: `48vw` }}
            >
              <div className="w-1/2 pr-1 md:pl-1">
                <img
                  href="#"
                  alt=""
                  className="block mb-1 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IMG_4506.JPG?v=1597272366"
                ></img>

                <img
                  href="#"
                  alt=""
                  className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IMG_4505.JPG?v=1597272366"
                ></img>
              </div>

              <div className="w-1/2 pl-1 md:pr-0">
                <img
                  href="#"
                  alt=""
                  className="block mb-1 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IMG_4502.JPG?v=1597272365"
                ></img>

                <img
                  href="#"
                  alt=""
                  className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IMG_4508.JPG?v=1597272366"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
