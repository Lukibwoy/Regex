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

//   Zad. 4
// Znajdź słowa, które kończą się co najmniej dwiema literami ‘s’, np.
// hiss 
// hisssss 
// His


const text4 = 'amphisssz'
const regex4 = /\b\w*[sS]{2,}\b/g

if (regex4.test(text4)) {
  console.log('String zawiera ciąg liter ss');
} else {
  console.log("String tego nie spełnia");
}


// Zad. 5
// Znajdź stringa, który zawiera co najmniej sześć liter i nie zawiera litery ‘A’, np.
// unique New York 

const text5 = 'unique New York'
const regex5 = /(?![Aa])[a-zA-Z]{6,}/

console.log(regex5.test(text5));

// Zad. 6
// W stringu HTML, wszystkie elementy otoczone są pewnymi znacznikami HTML (<p>Twój tekst</p>, <h1>Twój tekst2</h1> itd.).
// Każdy znacznik ma następującą postać: <znacznik>Tekst</znacznik>.

// Twoje zadanie to określić, czy podany tekst jest prawidłowym elementem kodu HTML, czyli czy składa się z odpowiednio skonstruowanych znaczników wraz z dowolnym tekstem pomiędzy nimi. Trudność, jaką możesz tutaj napotkać, to konieczność ominięcia, tzw. chciwego przeszukiwania, które omówiliśmy w szkoleniu.





// Zad 7.
// Zakładając, że masz dostęp do adresu w formacie: username@companyname.com, napisz program, który wydrukuje nazwę firmy z takiego adresu. Zarówno nazwa użytkownika jak i nazwa firma może składać się tylko i wyłącznie z liter.


const email = prompt('Podaj adres email');
const companyName = email.match(/^[a-zA-Z]+@([a-zA-Z]+)\.com$/)[1];
console.log(companyName);



// // // Zad 8.
// // // Napisz program, który przyjmować będzie dowolny ciąg znaków oddzielonych spacją. Wyodrębnij z niego tylko i wyłącznie te wyrazy, które są liczbami.

// // // Przykładowo dla poniższych danych wejściowych:
// // // 2 cats and 3 dogs

// // // Zwróć:
// // // [‘2’, ‘3’]



const input = prompt("Podaj zdanie zawierające liczby oraz tekst");
const numbers = input.match(/\d+/g);

console.log(numbers);



// // Zad. 9
// Napisz wyrażenie, które sprawdza, czy liczba zmiennoprzecinkowa podana przez użytkownika ma poprawny format. Na przykład liczba 123,2341515132135 lub -10 są poprawne, ale 18-12 czy 123, (przecinek na końcu) już nie.

const number = prompt('Podaj liczbę zmiennoprzecinkową:')

const regex9 = /^[-+]?\d+(\,\d+)/;

if(regex9.test(number)){
  console.log('Poprawny format liczby zmiennoprzecinkowej');
}else{
  console.log('Niepoprawny format liczby zmiennoprzecinkowej');
}

// Zad. 10
// Efektem zbierania pomiarów temperatury okazał być się plik tekstowy, który zawiera datę pomiaru oraz wartość. W jaki sposób możliwe jest wydzielenie tylko dat w takiej sytuacji? Poniżej znajduje się fragment przykładowych danych wejściowych.

// "2019-03-11: 23.5, 19/03/12: 12.7, 2019.03.13: 11.1, 2019-marzec-14: 14.3"

const text10 = '2019-kwiecień-11: 23.5';
const regex10 = /\d{4}[.-](\d{2}|[a-zA-Ząńżź]+)[.-]\d{2}/;
const date = text10.match(regex10)[0]; 
console.log(date); // '2019-03-11'




// Zad. 11
// Sprawdź, czy podany string jest zapisem koloru w systemie szesnastkowym (HEX).
// string musi się zaczynać znakiem #
// następnie musi zawierać 3 lub 6 (ale nie 4 lub 5) znaki kodu szesnastkowego pisane małą lub wielką literą; 

// Przykłady:
// #ab4 
// #AB4B72 

// Błędne przykłady:
// #ab43 
// #aaaaaaaaa 
// #ahl 

function checkColor(color){
  const regex11 = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/
  return regex11.test(color)
}

console.log(checkColor("#ab4"));
console.log(checkColor("#AB4B72"));
console.log(checkColor("#ab43")); 
console.log(checkColor("#aaaaabbbaaaa")); 
console.log(checkColor("#ahl")); 
