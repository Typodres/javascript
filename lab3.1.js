function random(min, max) {if (max === undefined) {
     max = min
      min = 0;}
    return Math.floor(Math.random() * (max - min + 1)) + min
} 

const charecters = 'qwkewqjnjeiqeh6789'
function generateKey(length, charecters) {
    
    let key = '';
    for (let i = 0; i < length; i++) {
        const rIndex = random(0, charecters.length - 1);
        const char = charecters[rIndex]; 
        key+=char
    }
    return key;
}

function ipToInt(ip = '127.0.0.1') {
 const p1 = ip.split('.').map(Number);
 let result = 0
 for(bite of bites) {
 result = (result << 8) + byte;
 return result
}
}

const iface = {
m1: (x) => x,
m2: (x, y) => 2 * y + x,
m3: function (x, y, z) { return x + y + z; },
m4: 9
};
const result = [];
for (const key of Object.keys(iface)) {
   iface[key]
   if (typeof iface[key] === 'function') {
    result.push([key, iface[key].length]);
   }

}
console.log(result);