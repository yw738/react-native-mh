const localUrl = 'http://api.pingcc.cn/';

export default async(url='',data={},type='GET')=>{
    type = type.toUpperCase();
    url = localUrl + url;
    let requestConfig = {
        credentials: 'include',//为了在当前域名内自动发送 cookie ， 必须提供这个选项
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: "cors",//请求的模式
        cache: "force-cache"
    }
    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }
    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }
    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}
// ?mhname=海贼王

// ?mhurl1=url(通过‘mhname’获取到的url)

// ?mhurl2=url(通过‘mhurl1'获取到的url)

// 通过mhurl2获取到的是漫画图片，按顺序排列

// 注意：如果有图片无法显示，禁用referer属性即可