import { withWidth } from '@material-ui/core'
import React, { useState } from 'react'
import Modal from 'react-modal'
import './PopUp.css'
Modal.setAppElement('#root')
const ProductPopUp = ({ title, image, keyIngredients, skinType, volume, price, description }) => {
    console.log("Product Details : ", title)
    const [modalIsopen, setmodalIsopen] = useState(false);
    return (
        <>
            <button className='primary-btn' onClick={() => setmodalIsopen(true)} style={{ height: '30px', width: '100%' }}>{title}</button>
            <Modal isOpen={modalIsopen}
                onRequestClose={() => setmodalIsopen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'rgba(0,0,240,0.25)',
                            top: '0px',
                            right: '0px',
                            left: '0px',
                            bottom: '0px',
                            position: 'fixed'
                        },
                        content: {
                            color: 'darkBlue',
                            top: '150px',
                            right: '400px',
                            left: '400px',
                            bottom: '100px',


                        }
                    }
                }
            >
                <section className='gallery top'>

                    <div className='row-popup'>
                        <div className='column-popup'>
                            <div className='popup-img'>
                                <img src={image} alt='Gallery' />
                                <i className='fas fa-image'></i>
                            </div>
                            <div className='title'></div>
                        </div>
                        <div className='row-popup'>
                            <div className='column-popup'>
                                <h2><center>{title}</center></h2>
                                <p><div className='keys'>
                                    Key ingredients : </div>  {keyIngredients}
                                </p>
                                <p><div className='keys'>
                                    Skin Type/Hair Type : </div>{skinType}
                                </p>
                                <p><div className='keys'>
                                    Volume :</div> {volume}
                                </p>
                                <p><div className='keys'>
                                    Price : </div>{price}
                                </p>
                                <p><div className='keys'>
                                    Description : </div>{description}
                                </p>
                                <div style={{ paddingTop: '30px' }}>

                                    Get yours by calling +11 123 5679 or sending an email to laceylonvegan@gmail.com

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </Modal>

        </>

    )
}

export default ProductPopUp