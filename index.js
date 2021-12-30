// reverse string
var name = 'Sathishkumar Manoharan';

function reverseString(str, separator) {
  return str.split(separator).reverse().join(separator);
}

var reverseStr = reverseString(name, "");

console.log(reverseStr);


// find a big number
var arr = [1,2,3,4,5,6,7,8,9];

console.log(Math.max(...arr))

var jsonObj = [{
      "name": "B",
      "description": "South Georgia and the South Sandwich",
      "status": "ok",
      "location": {
        "created_at": "2021-12-08T05:36:51.951308",
        "address": "Boston, MA 02128, USA",
        "phone": "8744024236",
        "name": "Boston11",
      }
    },
    {
      "name": "A",
      "description": "South Georgia and the South Sandwich",
      "status": "ok",
      "location": {
        "created_at": "2021-12-08T05:36:51.951308",
        "address": "Boston, MA 02128, USA",
        "phone": "8744024236",
        "name": "India",
      }
    },
    {
      "name": "C",
      "description": "South Georgia and the South Sandwich",
      "status": "ok",
      "location": {
        "created_at": "2021-12-08T05:36:51.951308",
        "address": "Boston, MA 02128, USA",
        "phone": "8744024236",
        "name": "Austrlia",
      }
    }];

console.log(
  jsonObj.sort((x,y)=> x.location.name.localeCompare(y.location.name))
  )

for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log('var', i);
  }
  setTimeout(log, 100);
}

for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log('let', i);
  }
  setTimeout(log, 100);
}

var a = [1,2,3,4,5];
a[20] = 30;

console.log(a)

var aa = {
  name: 'satz',
  age: 30
}

console.log(aa.name);