function generateKey(length, characters) {
    let key = '';
    let randomIndex = 0;
    for (let i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}

let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = generateKey(16, characters);
console.log(key);
