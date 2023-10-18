export const makeGetRequest = async(url: string, params: {[key: string]: any} = {}) => {
    url += '?' + ( new URLSearchParams( params ) ).toString();
    let options = {
        method: 'GET',
    };
    const response = await fetch(url, options);
    const data  = await response.json();
    return data;
}