function findMinAndRemove(array){
  let min = array[0]
  let i = 1
  while(i < array.length){
    if(min > array[i]){
      min = array[i]
    }
    i++;
  }
  let position = array.indexOf(min)
  // return array.slice(0, position).concat(array.slice(position + 1))
  return array.splice(position, 1)[0]
}

function insertionSort(array){
  let sortedArr = []
  while(array.length !== 0){
    let min = findMinAndRemove(array)
    sortedArr.push(min)
  }
  return sortedArr;
}
