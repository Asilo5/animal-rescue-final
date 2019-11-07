export const listedAnimals = (animals) => ({
  type: 'RECEIVED_ANIMALS',
  animals
});

export const receivedDonations = (donations) => ({
  type: 'RECEIVED_DONATIONS',
  donations
});

export const sendDonations = (donation) => ({
  type: 'SEND_DONATIONS',
  donation
});

export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    bool
});

export const hasError = (msg) => ({
    type: 'HAS_ERROR',
    msg
});