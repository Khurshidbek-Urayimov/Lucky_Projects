// check if there is number in arr and return boolean

function wordCount(number, n) {
    for (num of number) {
      if (n == num) {
        return true
      }
      return false
    }
  }
  const aa = wordCount([ 3, 6, 8, 5 ], 2);
  console.log(aa);


// check if there is space and return boolean

function hasSpace( words ){
    if(words.includes(" ")) {
        return true
    }
    else return false
}

console.log(hasSpace("Salom, Dunyo"))