import React, { useEffect, useState } from "react"
import ProductPopUp from "./ProductPopUp"


const Cards = (props) => {
  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    console.log("props", props);
    setPopup(!popup)

  }

  useEffect(() => {
    console.log("props", props);
  }, [])
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={props.imgaes} alt='Gallery' onClick={toggleModal} />
          <i className='fas fa-image' onClick={toggleModal}></i>
        </div>
        <div className='title'>
          <ProductPopUp title={props.title} image={props.imgaes}/>
        </div>
      </div>

      {popup && (
        <div className='popup'>
          <div className='hide'></div>
          <div className='popup-content'>
            <button onClick={toggleModal}>Close</button>
            <img src={props.imgaes} alt='Gallery' />
          </div>
        </div>
      )}
    </>
  )
}

export default Cards