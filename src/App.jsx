import React from 'react';
import './styles/style.scss';
import { useSelector, useDispatch } from 'react-redux';
import Item from './components/Item';
import Welcome from './components/Welcome';
import { FaAngleLeft } from 'react-icons/fa';
import { hideItems } from './redux/action';


export default function App() {
    const items = useSelector(state => state.countries.items);
    const dispatch = useDispatch();

    if(!items.length) {
        return (
            <Welcome dispatch={dispatch} />
        )
    }else {
        return (
            <>
                <button type='button' className='btn btn-undo' onClick={() => dispatch(hideItems())}>
                    <FaAngleLeft />
                </button>
                <div className='items'>
                    {items.map((item, index) =>
                        <Item item={item} key={index} index={index} />
                    )}
                </div>
            </>
        )
    }
}
