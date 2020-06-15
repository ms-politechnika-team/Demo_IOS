export const uploadData = (url, comment, data, token?) => {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST'
    };
    const body = new FormData();

    body.append("image", data)
    body.append("comment", comment)

    console.log(data)

    if(token) {
        Object.assign(options.headers, {"Authorization" : `JWT ${token}`})
    }

    console.log({...options, body})
    return fetch(url, {...options, body}).then(response => {
        return response.json()
            .then(responseJson => {
                //You put some checks here
                return responseJson;
            });
    }).catch(error => console.log(error));
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