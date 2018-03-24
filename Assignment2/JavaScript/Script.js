var books = [
{title:"React Quickly: Painless web apps with React, JSX, Redux, and GraphQL", pdate:2017 , review:33 , rate:4.5 , img:"https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg"},
{title:"The Principles of Object-Oriented JavaScript", pdate:2014},
{title:"World War Z: An Oral History of the Zombie War", pdate:2011},

]

displaybooks();

function sortBydate() {
    books.sort(function(a, b){return a.pdate - b.pdate});
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
  "<img src="+books[0].img + "> <br><br> Title: " +books[0].title + "<br> Publicher Date: " + books[0].pdate + "<br> Reviews: " + books[0].review + " <br> Rate: " +books[0].rate  +"<hr>" +
  "Title: " + books[1].title + "<br> Publicher Date: " + books[1].pdate + "<hr>" +
   "Title: " + books[2].title + " <br> Publicher Date: " + books[2].pdate;
   images(books);
}
