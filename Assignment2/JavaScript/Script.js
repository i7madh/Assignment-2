var books = [
{title:"React Quickly: Painless web apps with React, JSX, Redux, and GraphQL", pdate:2017 , review:33 , rate:4.5 , price:45 , img:"https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg"},
{title:"The Principles of Object-Oriented JavaScript", pdate:2014 , review:13 , rate:3.1 , price:10.99 , img:"https://images-na.ssl-images-amazon.com/images/I/51nCY21njKL._AC_US218_.jpg"},
{title:"World War Z: An Oral History of the Zombie War", pdate:2011 , review:23 , rate:4.1 , price:15 , img:"https://images.gr-assets.com/books/1386328204l/8908.jpg"},

]

displaybooks();

function sortBydate() {
    books.sort(function(a, b){return a.pdate - b.pdate});
    displaybooks();
}
function sortStarRate() {
    books.sort(function(a, b){return b.rate - a.rate});
    displaybooks();
}
function priceHighToLow() {
    books.sort(function(a, b){return b.price - a.price});
    displaybooks();
}
function priceLowToHigh() {
    books.sort(function(a, b){return  a.price - b.price });
    displaybooks();
}
function MostReview() {
    books.sort(function(a, b){return  b.review - a.review });
    displaybooks();
}

function images(array) {
for ( var i= 0; i < array.length; i++){
var x = document.createElement("img");
x.setAttribute("src",array[i].img);
document.appendChild(x);

  }
}

function displaybooks() {
  document.getElementById("show").innerHTML =
  "<img src="+books[0].img + "> <br><br> Title: " +books[0].title + "<br> Publicher Date: " + books[0].pdate + "<br> Reviews: " + books[0].review + " <br> Rate: " +books[0].rate +"<br> Price:" + books[0].price +"$<hr>" +
  "<img src="+books[1].img + "> <br><br> Title: " +books[1].title + "<br> Publicher Date: " + books[1].pdate + "<br> Reviews: " + books[1].review + " <br> Rate: " +books[1].rate  +"<br> Price:" + books[1].price +"$<hr>" +
   "<img src="+books[2].img + "> <br><br> Title: " +books[2].title + "<br> Publicher Date: " + books[2].pdate + "<br> Reviews: " + books[2].review + " <br> Rate: " +books[2].rate  +"<br> Price:" + books[2].price +"$<hr>" ;
   images(books);
}
