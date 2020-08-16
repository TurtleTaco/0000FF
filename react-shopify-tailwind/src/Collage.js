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

          <div className="flex" style={{ padding: `1.5px` }}>
            <div
              className="flex-1 min-w-0"
              style={{ width: `50vw`, margin: `1.5px` }}
            >
              {items.map((item, index) => (
                <img
                  href="#"
                  key={item.key}
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/left_aw.jpg?v=1597546758"
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
              className="flex flex-1 min-w-0"
              style={{ width: `50vw`, margin: `1.5px` }}
            >
              <div className="w-full" style={{}}>
                <img
                  href="#"
                  alt=""
                  className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/right_top_aw.jpg?v=1597546759"
                  style={{ marginBottom: `3px` }}
                ></img>

                <img
                  href="#"
                  alt=""
                  className="block mb-0 overflow-hidden transform transition-all duration-300 scale-100 hover:scale-100"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/right_bottom_aw.jpg?v=1597546759"
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
