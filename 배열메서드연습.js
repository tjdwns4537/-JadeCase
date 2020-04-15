var arr = [
  {x1: 1, x2: 1},
  {x1: 2, x2: 2},
  {x1: 3, x2: 3}
];
console.log(arr.x1)
var arr2 =null;
arr2 = arr.map((obj)=>{
    return {
      x1: obj.x1,
      x2: obj.x2,
      result : obj.x1*obj.x2
    };
})
console.log(arr2)