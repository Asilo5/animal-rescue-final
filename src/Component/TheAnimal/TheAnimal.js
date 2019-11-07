import React from 'react';

const TheAnimal = ({ name, species, description, img }) => {
    return (
        <section>
            <img src={img} alt={name}/>
           <h2>{name}</h2>
           <h4>{species}</h4>
           <h3>{description}</h3>
        </section>
    )
}

export default TheAnimal;