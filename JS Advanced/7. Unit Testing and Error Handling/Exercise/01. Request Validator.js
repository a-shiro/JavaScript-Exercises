function validate(object) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialChars = ['<', '>', '\\', '&', `'`, `"`];

    if (!validMethods.includes(object.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!object.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (object.uri !== '*' && !object.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(object.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!object.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    for (let ch of object.message) {
        if (specialChars.includes(ch)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return object;
}


let result = validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

console.log(result);

result = validate({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});

