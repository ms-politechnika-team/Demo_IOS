const uploadData = (url, token, data) => {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorisation' : `JWT ${token}`
        },
        method: 'POST'
    };

    options.body = new FormData();

    for (const key in data) {
        options.body.append(key, data[key]);
    }

    return fetch(url, options)
        .then(response => {
            return response.json()
                .then(responseJson => {
                    //You put some checks here
                    return responseJson;
                });
        });
}

const fetchData = async (url, token) => {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorisation' : `JWT ${token}`
        },
        method: 'POST'
    }

    return fetch(url, options);
}