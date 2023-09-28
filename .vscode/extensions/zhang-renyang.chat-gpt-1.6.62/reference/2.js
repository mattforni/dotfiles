const createInstanceWithRetry = (instance, lines=[]) => {
    return {
        ...instance,
        async post(url, data, options) {
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                try {
                    const response = await instance.post(`${line.base}${url}`, data, {
                        ...options,
                        headers: {
                            ...options.headers,
                            'Authorization': `Bearer ${line.key}`
                        },
                    });
                    return response;
                } catch (error) {
                    // 如果是最后一条线路，且请求失败，那么抛出错误
                    if (i === lines.length - 1) throw error;
                }
            }
        },
    };
};