import React from 'react'; 
import { connect } from 'react-redux';
import TheAnimal from '../../Component/TheAnimal/TheAnimal';

const Animals = ({rescuedAnimals}) => {
  let animals = rescuedAnimals.map((animal) => {
      return <TheAnimal key={animal.id} {...animal}/>
  })
    return (
      <section>
        {animals}
      </section>
    )
}

export const mapStateToProps = ({rescuedAnimals}) => ({
    rescuedAnimals
});

export default connect(mapStateToProps)(Animals);