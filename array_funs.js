var arryObj = [ 'Sathishkumar', 'Praveenkumar', 'Vishnukumar', 'Ram', 'Prem'];

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort array

let sortedObj = arryObj.sort();

console.log(sortedObj);

// sort by associative array name
let itemsSort = items.sort((a,b) => {
  return a.name.localeCompare(b.name);
});

// sort by associative array number
let itemSortByNumber = items.sort((x,y)=>{
  return x.value - y.value;
})


console.log(itemSortByNumber)