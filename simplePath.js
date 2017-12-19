/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.split('/');
    const stack = [];
    paths.map((path, index) => {
        if (!!path) {
            if (path === '.') {
            } else if (path === '..') {
                if (stack.length >= 2) {
                    stack.pop();
                } else {
                    if (stack.length === 1) {
                        stack.pop();
                    } else {
                    }
                }
            } else {
                stack.push(path);
            }
        }
    });
    return '/' + stack.join('/');
};

console.log(simplifyPath('/home/foo/.ssh/../.ssh2/authorized_keys/'));
