export const uploadData = (url, comment, data, token?) => {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST'
    };

    options.body = new FormData();

    if(token) {
        Object.assign(options.headers, {"Authorization" : `JWT ${token}`})
    }
    options.body.append("comment", comment)

    for (const key in data) {
        console.log(key,": ", JSON.stringify(data[key]))
        options.body.append(key, JSON.stringify(data[key]))
    }

    console.log(options)
    return fetch(url, options).then(response => {
        return response.json()
            .then(responseJson => {
                //You put some checks here
                return responseJson;
            });
    });
}

export const fetchData = async (url, token?) => {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorisation' : `JWT ${token}`
        }
    }

    if(token) {
        Object.assign(options.headers, {"Authorization" : `JWT ${token}`})
    }

    return fetch(url, options);
}

export const fetchDataPost = (url, body) => {
    const options = {
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(body),
        method: 'POST'
    }

    return fetch(url, options).then(response => {
        return response.json()
            .then(responseJson => {
                //You put some checks here
                return responseJson;
            });
    });
}

export const fetchPosts = (url) => {
    return fetch(url).then(response => {
        return response.json()
            .then(responseJson => {
                //You put some checks here
                return responseJson;
            });
    });
}