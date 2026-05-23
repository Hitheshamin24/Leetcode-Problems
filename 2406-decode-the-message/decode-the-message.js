/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {

    let map = new Map();
    let ch = 'a';
    for (let i = 0; i < key.length; i++) {
        if (key[i] === ' ' || map.has(key[i])) {
            continue;
        } else {
            map.set(key[i], ch);
            let code = ch.charCodeAt(0);
            code++;
            ch = String.fromCharCode(code)
        }
    }
    let ans=[];
    for(let i=0;i<message.length;i++){
        ans.push(map.get(message[i])|| message[i])
    }
    return ans.join('');
};