
ChatGPT技术，使用Cloudflare Workers生成不用魔法的OpenAI接口
https://blog.csdn.net/siyu471384214/article/details/130641949#:~:text=github.com/noobnooc/d0407b5fb81cff9d36f981170b99d4e6


https://gptlesson1.oss-cn-beijing.aliyuncs.com/meta.json


我有一组keys,格式如下 ['key1','key2']
我已经写好了一个方法getAPIkeyInfo，可以返回剩余金额和过期时间，剩余金额remaining是小数类型，过期时间endDate是Date类型
const { remaining,endDateString } = await getAPIkeyInfo(APIkey);

现在要编写node.js代码实现如下功能

用类似于Promise.any的方式，并调用getAPIkeyInfo方法获取每个key的剩余金额和过期时间
找到第一个剩余金额大于0，并且没有过期的的key



