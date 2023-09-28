/* eslint-disable @typescript-eslint/naming-convention */
const axios = require('axios');
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
async function checkBilling(apiKey) {
  const endDate = new Date();
  const startDate = new Date(endDate.getTime() - 90 * 24 * 60 * 60 * 1000);
  const apiUrl = 'https://openai.1rmb.tk';
  const urlSubscription = `${apiUrl}/v1/dashboard/billing/subscription`;
  const urlUsage = `${apiUrl}/v1/dashboard/billing/usage?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`;
  const headers = {
    "Authorization": "Bearer " + apiKey,
    "Content-Type": "application/json",
    "Accept-Encoding": "identity"
  };
  let subscriptionResponse = await axios.get(urlSubscription,{headers});
  const subscriptionData = subscriptionResponse.data;
  const totalAmount = subscriptionData.hard_limit_usd;
  let usageResponse = await axios.get(urlUsage,{headers});
  const usageData = usageResponse.data;
  const totalUsage = usageData.total_usage / 100;
  const remaining = totalAmount - totalUsage;
   // 计算开始时间和结束时间
   const endDateString = new Date(subscriptionData.access_until * 1000).toLocaleDateString();
  console.log(`Total Amount: ${totalAmount.toFixed(2)}`);
  console.log(`Used: ${totalUsage.toFixed(2)}`);
  console.log(`Remaining: ${remaining.toFixed(2)}`);
  console.log(`End Date: ${endDateString}`);
}
checkBilling('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');
