export const rescuedAnimals = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVED_ANIMALS':
      return action.animals;
    default:
      return state;
  }
}