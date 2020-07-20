import React from 'react';
import { getItems } from '../redux/action';

export default function Welcome({dispatch}) {
    return (
        <div className='container'>
            <h1>Countries information</h1>
            <button type='button' className='btn btn-top' onClick={() => dispatch(getItems())}>
                Click here to load countries
                <span></span>
            </button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus quo veritatis, 
                tenetur libero enim ex optio adipisci sequi saepe a nam doloremque autem temporibus eveniet nulla corrupti 
                consequuntur rerum blanditiis distinctio voluptatum sunt consectetur? Exercitationem, repellat aliquid vero 
                dolorem iusto libero asperiores quos soluta laudantium quis? Quasi, illum? Numquam doloribus iure quia totam ab 
                tenetur nostrum minus velit esse. Minima ex quod non, explicabo nulla quo suscipit ipsum vero quam inventore 
                quia aut labore aliquam possimus quisquam, quae corporis deserunt dicta, quas molestias tempora esse rerum consequuntur. 
                Repudiandae quam dolores molestiae ipsam nesciunt reiciendis laborum culpa asperiores suscipit maiores.
                Tenetur nostrum minus velit esse. Minima ex quod non, explicabo nulla quo suscipit ipsum vero quam inventore 
                quia aut labore aliquam possimus quisquam, quae corporis deserunt dicta, quas molestias tempora esse rerum consequuntur. 
                Repudiandae quam dolores molestiae ipsam nesciunt reiciendis laborum culpa asperiores suscipit maiores
            </p>
            <img src='https://royaltransportationservices.com/wp-content/uploads/2019/03/World-Map-PNG-Image-HD.png' alt='Map'/>
        </div>
    )
}
