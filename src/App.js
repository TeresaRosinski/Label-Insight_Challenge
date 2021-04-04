import "./App.css";
import React, { useState } from "react";
import useLocalStorage from "react-use-localstorage";
import Axios from "axios";
import ImageComponent from "./components/ImageComponent.js";

function App() {
  let [imageInfo, setImageInfo] = useState([]);

  const getImages = async () => {
    try {
      let response = await Axios.get(
        "https://jsonplaceholder.typicode.com/photos/?_limit=25"
      );
      response = setImageInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  getImages();
  const displayedImageArray = imageInfo;

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <h1>Teresa Rosinski's</h1> <h1> Label Insight Coding Challenge</h1>
      <div className="image_container">
        {displayedImageArray.map((item, index) => (
          <>
            <ImageComponent
              thumbnailUrl={item.thumbnailUrl}
              key={index}
              url={item.url}
              title={item.title}
              id={item.id}
              openModalProp={openModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
