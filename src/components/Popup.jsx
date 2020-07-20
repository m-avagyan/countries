import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Popup({item, displayPopup, index}) {
    return (
        <div className='page'>
            <div className='main'>
                <div className='main-top'>
                    <h3>{item.name}</h3>
                    <button type='button' className='btn-close' onClick={displayPopup}><FaTimes /></button>
                </div>
                <div className='info'>
                    <p><span>Native name:</span> {item.nativeName}</p>
                    <p><span>Capital:</span> {item.capital}</p>
                    <p><span>Region:</span> {item.region}</p>
                    <p><span>Subregion:</span> {item.subregion}</p>
                    <p><span>Timezone:</span> {item.timezones}</p>
                    <p><span>Language:</span> {item.languages[0].nativeName}</p>
                    <p><span>Calling codes:</span> {item.callingCodes}</p>
                    <p><span>Money:</span> {item.currencies[0].name}</p>
                </div>
                <div className='footer'>
                    <p>Countries information</p>
                    <span>{index + 1}</span>
                </div>
            </div>
        </div>
    )
}
