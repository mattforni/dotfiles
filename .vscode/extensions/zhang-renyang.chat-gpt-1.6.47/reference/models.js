/* eslint-disable @typescript-eslint/naming-convention */
const axios = require('axios');
async function checkBilling(apiKey) {
  const apiUrl = 'https://api.openai.com/v1/models';
 const headers = {
    "Authorization": "Bearer " + apiKey,
    "Content-Type": "application/json",
    "Accept-Encoding": "identity"
  };
  let subscriptionResponse = await axios.get(apiUrl,{headers});
  const subscriptionData = subscriptionResponse.data;
  console.log(subscriptionData);
}
checkBilling('sk-l1AyIBNOlKZvVOEOu2kBT3BlbkFJGyGAwY7umGg9NrYJ2XO');
