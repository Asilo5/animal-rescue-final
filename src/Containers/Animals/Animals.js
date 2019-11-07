import React from 'react'; 
import { connect } from 'react-redux';
import TheAnimal from '../../Component/TheAnimal/TheAnimal';

export const Animals = ({rescuedAnimals}) => {
  console.log(rescuedAnimals);
//   let animals = rescuedAnimals.map((animal) => {
//       return <TheAnimal key={animal.id} {...animal}/>
//   })
    return (
      <section>
        {/* {animals} */}
      </section>
    )
}

export const mapStateToProps = ({rescuedAnimals}) => ({
    rescuedAnimals
});

export default connect(mapStateToProps)(Animals);