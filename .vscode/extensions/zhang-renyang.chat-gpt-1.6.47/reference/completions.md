在正常的情况下，如果没有使用流式传输，请求https://api.openai.com/v1/chat/completions时返回的数据结构如下：

```json
{
  "id": "chatcmpl-2nYZXWYSTTRi0xEviKjjilqrFb9Ve",
  "object": "chat.completion",
  "created": 1650633756,
  "model": "gpt-4.5-turbo",
  "usage": {
    "prompt_tokens": 56,
    "completion_tokens": 31,
    "total_tokens": 87
  },
  "choices": [
    {
      "message": {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      "finish_reason": "stop",
      "index": 0
    },
    {
      "message": {
        "role": "user",
        "content": "Who won the world series in 2020?"
      },
      "finish_reason": "stop",
      "index": 1
    },
    {
      "message": {
        "role": "assistant",
        "content": "The Los Angeles Dodgers won the World Series in 2020."
      },
      "finish_reason": "stop",
      "index": 2
    }
  ]
}

```