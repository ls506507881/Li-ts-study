// function min(a:number,b:number):number{
//   if(a<b){
//     return a
//   }else{
//     return b
//   }
// }

// var c = min(1,2)
// console.log(c)

// --------------

// function count(a:string,b:string):string
// function count(a:number,b:number):number
// function count(a:any,b:any):any{
//   return a + b
// }
// var b = count(5,7)
// var c = count('5','7')
// console.log(b)
// console.log(c)

// --------------

// function selectSort(a:number[]):number[]{
//   for(let i = 0;i<a.length-1;i++){
//     let minIndex = i;
//     for(let j=i+1;j<a.length;j++){
//       if(a[j]<a[minIndex]){
//         minIndex = j
//       }
//     }
//     let temp = a[minIndex]
//     a[minIndex] = a[i]
//     a[i] = temp
//   }
//   return a
// }

// let b = selectSort([5,4,2,1,3])
// console.log(b)

// --------------
enum Gender{
  Male,
  Female
}
interface Person{
  gender: Gender;
}

function merry(a:Person,b:Person):[Person,Person]{
  if(a.gender !== b.gender){
    return [a,b];
  }else{
    throw new Error('性别相同不能结婚')
  }
}

let a = { gender: Gender.Male };
let b = { gender: Gender.Female };
console.log(merry(a,b));