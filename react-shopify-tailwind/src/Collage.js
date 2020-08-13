import React, { useState, useEffect } from "react";
import { db, storage } from "./FirebaseConfig";
// Global config for full screensize
import screenDim from "./Config";

function getImage(image, urlResult) {
  storage
    .child(`${image}.JPG`)
    .getDownloadURL()
    .then((url) => {
      urlResult = url;
    });
}

function Collage() {
  // {key, name, url}
  var [items, setItems] = useState([]);
  // Photo URLs
  var bannerPhoto, subPhoto1_1, subPhoto1_2, subPhoto2_1, subPhoto2_2;

  // Viewing point calculation, for testing purposes
  // iPhone browser width and height
  const viewWidth = parseInt(screenDim[1].width).toString() + "px";
  const viewHeight = parseInt(screenDim[1].height).toString() + "px";
  // Actual content width is the screen width - 40px
  const contentWidth = (parseInt(screenDim[1].width) - 40).toString() + "px";
  const contentWidthHalf =
    ((parseInt(screenDim[1].width) - 40) / 2).toString() + "px";

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
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
          style={{
            width: `${viewWidth}`,
            height: `${viewHeight}`,
          }}
        >
          <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div className="mb-3">
              <h1 className="text-3xl font-bold">Aug Release</h1>
              <p className="text-sm text-gray-500 uppercase font-bold">
                CELEBRATE YOUR VALENTINE
              </p>
            </div>

            <div
              className="flex -mx-1 mb-3"
              style={{ height: `${contentWidth}`, width: `${contentWidth}` }}
            >
              <div
                className="w-full h-full px-1"
                style={{
                  position: `relative`,
                }}
              >
                {items.map((item, index) => (
                  <a
                    href="#"
                    key={item.key}
                    className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                    style={{
                      backgroundImage:
                        "url(https://firebasestorage.googleapis.com/v0/b/shop-tailwind.appspot.com/o/IMG_4217.JPG?alt=media&token=dfce84d5-afe7-433d-b4b2-15ac5a04f1ae)",
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      height: `${contentWidth}`,
                    }}
                  >
                    <h1
                      className="text-lg font-bold text-white leading-tight"
                      style={{
                        position: `absolute`,
                        bottom: `10px`,
                        left: `5px`,
                      }}
                    >
                      殷昊天 50¥/次
                    </h1>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="flex -mx-1 mb-5"
              style={{ height: `${contentWidth}`, width: `${contentWidth}` }}
            >
              <div className="w-1/2 h-full px-1">
                <a
                  href="#"
                  className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    backgroundImage: `url(https://drive.google.com/uc?export=view&id=1w-Enob-Gd7y-qWdAunjCJPQdNcNfpzU1)`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    height: `${contentWidthHalf}`,
                  }}
                ></a>

                <a
                  href="#"
                  className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    backgroundImage: `url(https://drive.google.com/uc?export=view&id=1bn9jr_2USGFGUXde3OIjZdJqIJFaWN16)`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    height: `${contentWidthHalf}`,
                  }}
                ></a>
              </div>

              <div className="w-1/2 px-1">
                <a
                  href="#"
                  className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    backgroundImage: `url(https://drive.google.com/uc?export=view&id=10-bPX2pvupEWJc94wrZEYVkugS92PzVD)`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    height: `${contentWidthHalf}`,
                  }}
                ></a>

                <a
                  href="#"
                  className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    backgroundImage: `url(https://drive.google.com/uc?export=view&id=1KU0uBjtWayfWa75ODjjd0GHazcfbF6vf)`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    height: `${contentWidthHalf}`,
                  }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
