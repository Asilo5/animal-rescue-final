export const Loaded = (state = false, action) => {
    switch(action.type) {
      case 'IS_LOADING':
        return action.bool;
      default:
        return state;
    }
  }