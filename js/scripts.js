function sum (number = 0){
  
    function secondSum(accum){
      return number += accum
    }
    return secondSum
  }
  
  let result = sum()
  console.log(result(1))
  console.log(result(2))
  console.log(result(4))
  console.log(result(8))
  console.log(result(11))