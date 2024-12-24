function obscureApiKey(apiKey) {
    return apiKey.replace(/sk-([a-zA-Z0-9]{16})([a-zA-Z0-9]{16})([a-zA-Z0-9]{16})/, (_, start, __, end) => {
        return start + '*'.repeat(16) + end;
    });
}
console.log(obscureApiKey('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'));