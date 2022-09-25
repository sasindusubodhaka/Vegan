import React, { useEffect, useState } from "react"
import ProductPopUp from "./ProductPopUp"


const Cards = ({items}) => {
  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    // console.log("props", props);
    // setPopup(!popup)

  }

  useEffect(() => {
    console.log("props", items);
  }, [])
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={items.img && items.img} alt='Gallery' onClick={toggleModal} />
          <i className='fas fa-image' onClick={toggleModal}></i>
        </div>
        <div className='title'>
          <ProductPopUp title={items.title && items.title} 
                        image={items.img && items.img} 
                        keyIngredients={items.keyIngredients && items.keyIngredients}
                        skinType={items.skinType && items.skinType}
                        volume={items.volume && items.volume}
                        price={items.price && items.price}
                        description={items.description && items.description}
                        />
        </div>
      </div>

      {/* {popup && (
        <div className='popup'> 
          <div className='hide'></div>
          <div className='popup-content'>
            <button onClick={toggleModal}>Close</button>
            <img src={props.imgaes} alt='Gallery' />
          </div>
        </div>
      )} */}
    </>
  )
}

export default Cards