const axios = require('axios');
const ping = require('ping');
let host = 'https://api.openai.com';
async function checkHost(host) {
  const res = await ping.promise.probe(removeProtocol(host));
  return res.alive;
}
function removeProtocol(url) {
    const urlObj = new URL(url);
    return urlObj.host;
}
async function getAvailableHosts() {
  const response = await axios.get(`https://gptlesson1.oss-cn-beijing.aliyuncs.com/hosts.json?${Date.now()}`);
  return response.data;
}
(async function(){
    const isAlive = await checkHost(host);
    if (!isAlive) {
        console.log(`Host ${host} is not alive. Fetching new hosts...`);
        const hosts = await getAvailableHosts();
        const hostPromises = hosts.map(host => {
          return new Promise(async (resolve, reject) => {
            if (await checkHost(host)) {
              resolve(host);
            }
            reject(new Error(`Host ${host} is not alive`));
          });
        });
        try {
          const firstAliveHost = await Promise.any(hostPromises);
          console.log(`First alive host is ${firstAliveHost}`);
        } catch (error) {
          console.log(`No alive host found: ${error}`);
        }
      } else {
        console.log(`Host ${host} is alive.`);
      }
})()
