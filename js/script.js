// Zad. 1
// Napisz wyrażenie, który sprawdzi, czy string zawiera tylko i wyłącznie zbiór następujących znaków: (a-z, A-Z i 0-9).

const text =  'Lorem12345'

const regex = /^[a-zA-Z0-9]+$/;

if(regex.test(text)){
    console.log('String zawiera tylko w/w znaki');
}else{
    console.log('Error');
}


// Zad. 2
// Sprawdź, czy string rozpoczyna się pojedynczą cyfrą: 0 lub literą ‘b’.

const text2 = '1abbbcd'

const regex2 = /^([0b])/;

if (regex2.test(text2)) {
  console.log('String rozpoczyna się pojedynczą cyfrą 0 lub literą b');
} else {
  console.log('String nie rozpoczyna się pojedynczą cyfrą 0 lub literą b');
}


// Zad. 3
        // Sprawdzaj, czy podany string zawiera ciąg dowolnych małych liter rozdzielonych znakiem _, np. aab_cbbbc

const text3 = 'aa_ca'

const regex3 = /^[a-z]+(_[a-z]+)*$/
// const regex3 = /^[a-z]+(_[a-z]+)/

if (regex3.test(text3)) {
    console.log('String zawiera ciąg dowolnych małych liter rozdzielonych znakiem _');
  } else {
    console.log("String tego nie spełnia");
  }