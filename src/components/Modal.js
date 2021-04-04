import React, { useState } from "react";

/* useStateWithLocalStorage is a function I found researching how to use localStorage. I don't completely understand how it functions, yet. And it is not yet working as intended. Currently the modal is not populating with data unqiue to each thumbanil. Rather the modal is populating, I believe based on which thumbnail was clicked first. */

const useStateWithLocalStorage = (props) => {
  let [value, setValue] = React.useState(localStorage.getItem(props.id) || "");

  React.useEffect(() => {
    localStorage.setItem(props.id, value);
  }, [value]);

  return [value, setValue];
};

const Modal = (props) => {
  let [value, setValue] = useStateWithLocalStorage(props.id);

  function closeModal(e) {
    props.setShowModal(false);
  }

  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      {props.showModal ? (
        <div className="modalBackground">
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img src={props.url}></img>
            <div className="titleAndInput">
              <p className="closeSymbol" onClick={closeModal}>
                &times;
              </p>
              <h2>{props.title} </h2>
              <label>Description:</label>
              <input value={value} type="text" onChange={onChange}></input>
              <p>{value}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
