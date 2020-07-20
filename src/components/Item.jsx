import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from './Popup';

export default function Item({item, index}) {
    const [popup, setPopup] = useState(false);
    const loading = useSelector(state => state.countries.loading);

    const displayPopup = () => {
        popup ? setPopup(false) : setPopup(true)
    }

    return (
        <div className='item'>
            {
                loading
                ?   <h2 className='loading'>Loading...</h2>
                :   <>
                        <img src={item.flag} alt={'Flag ' + item.name} />
                        <h3>{item.name}</h3>
                        <h5>Capital: {item.capital.length ? item.capital : '- - - - -'}</h5>
                        <h5>Region: {item.region}</h5>
                        <h5>Language: {item.languages[0].nativeName}</h5>
                        <button type='button' className='btn btn-item' onClick={displayPopup}>
                            Read More
                            <span></span>
                        </button>
                        {
                            popup && <Popup displayPopup={displayPopup} item={item} index={index} />
                        }
                    </>
            }
        </div>
    )
}
