export const donations = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVED_DONATIONS':
      return action.donations;
    case 'SEND_DONATIONS':
      return [...state, action.donation];
    default:
      return state;
  }
}