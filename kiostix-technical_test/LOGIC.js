// Logic :

// 1. Buatlah sebuah fungsi untuk menentukan nilai tertinggi & terendah dari
// baris array berikut, tanpa menggunakan fungsi bawaan seperti MAX /
// MIN.. [‘1,5,8,0,9,7,4,3,2’]

// 2. Dari nilai 0-100, Buat lah fungsi dengan ketentuan berikut:
//  a. Setiap kelipatan 25 akan mencetak string “KI”
//  b. Setiap keliaptan 40 akan mencetak string “OS”
//  c. Setiap kelipatan 60 akan mencetak string “TIK”
//  d. Dan setiap kelipatan 99 akan mencetak string “KIOSTIX”

// 3. Buatlah sebuah fungsi untuk mendeteksi sebuah kata Palindrom atau
// kata yang bila dibaca dari depan atau dari belakang, tetap sama, misal
// “LEVEL”,”KATAK”,”MALAM” dll. Diharapkan membuat fungsi sendiri
// tanpa menggunakan fungsi bawaan seperti String Reverse dsb.

/* 1 */

function maxValue(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] > max) {
      max = arr[i];
    }
  }
  return max
}

function minValue(arr) {
  let min
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] < min) {
      min = arr[i];
    }
  }
  return min
}

console.log(maxValue([1,5,8,0,9,7,4,3,2]))
console.log(minValue([1,5,8,0,9,7,4,3,2]))

/* 2 */

function printString(num) {
  if (num % 25 === 0) {
    console.log("KI");
  } else if (num % 40 === 0) {
    console.log("OS");
  } else if (num % 60 === 0) {
    console.log("TIK");
  } else if (num % 99 === 0) {
    console.log("KIOSTIX");
  }
}

printString(99)

/* 3 */


// Jika input merupakan kata palindrom, function akan mengembalikan nilai true
function palindrome(kata) {
  if(kata.length === 0) {
    return true;
  } else {
    if(kata[0] === kata[kata.length-1]) {
      return true && palindrome(kata.slice(1, kata.length-1));
    } else {
      return false && palindrome(kata.slice(1, kata.length-1));
    }
  }
}

console.log(palindrome("LEVEL"))
console.log(palindrome("KATAK"))
console.log(palindrome("MALAM"))