

// NOTE creates an instance of axios that we can use to send HTTP requests in our javascript code

// NOTE you will get red squiggles when using the word axios unless you ts-ignore it
// @ts-ignore
export const zeldaApi = axios.create({
  // NOTE the url that we want axios to send http requests to. We can modify the url when making calls in our service
  baseURL: 'https://botw-compendium.herokuapp.com/api/v3/compendium',
  // NOTE if our request takes more than 8 seconds to get a response, throw an error
  timeout: 8000,
})