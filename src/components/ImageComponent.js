import React, { useState } from "react";
import Modal from "./Modal";

/*Trying to create an ImageComponent that has its own unique modal. I was hoping that if each ImageComponent passed down its own props to a child modal - that each child modal owuld be unique to its parent ImageComponent. This isn't yet successful */ 

function ImageComponent(props) {
  return (
    <div
      className="imageComponent"
      onClick={props.openModalProp}
      url={props.url}
      key={props.key}
    >
      <img
        src={props.thumbnailUrl}
        title={props.title}
        id={props.id}
        className="thumbnail"
        alt={"box number" + props.id}
      />
      <Modal
        key={props.key}
        id={props.id}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
        url={props.url}
        title={props.title}
      ></Modal>
    </div>
  );
}
export default ImageComponent;
