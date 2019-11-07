export const getAnimals = async () => {
  const resp = await fetch('http://localhost:3001/api/v1/rescue-animals');
  const data = await resp.json();

  if(!resp.ok) {
      throw new Error('No animals fetched');
  } else {
    return data;
  }
}

export const getDonations = async () => {
    const resp = await fetch('http://localhost:3001/api/v1/donations');
    const data = await resp.json();
  
    if(!resp.ok) {
        throw new Error('No donations fetched');
    } else {
      return data;
    }
}

export const postDonations = async (donation) => {
   const option = {
     method: 'POST',
     body: JSON.stringify(donation),
     headers: {
         'Content-Type' : 'application/json'
     }
   }

    const resp = await fetch('http://localhost:3001/api/v1/donations', option);
    const data = await resp.json();
  
    if(!resp.ok) {
        throw new Error('No donations fetched');
    } else {
      return data;
    }
}

