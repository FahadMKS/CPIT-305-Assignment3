  //AJAX 
  var books = []
  function doClick() {
    books = []
    var userName = document.getElementById('book').value;
    var xhttp = new XMLHttpRequest();
    // When the request is successful, finished, and response is ready, execute these function
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
        var resObj = JSON.parse(xhttp.responseText);
        for (let i = 0; i < 5; i++) {
            books.push({
                title: resObj.items[i].volumeInfo.title ,
                date_published: resObj.items[i].volumeInfo.publishedDate ,
                author:  resObj.items[i].volumeInfo.authors[i],
                reviews: resObj.items[i].volumeInfo.ratingsCount,
                rate: resObj.items[i].volumeInfo.averageRating, 
                img: resObj.items[i].volumeInfo.imageLinks.thumbnail})
              upDateDOM()
              console.log(resObj)
        }
      }
    }
    // Send an asynchronous HTTP GET request to the given end point (url)
    xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + userName, true);
    xhttp.send();
  }
  // Default sort
  sortByReviews()
  upDateDOM()


  function createBookItem(bookObj) {

    var liElem = document.createElement('li')
  
    var img = document.createElement('img');
    img.src = bookObj.img;
    img.width = 100;
    img.height = 150;
    liElem.appendChild(img);
  
    //var ul = document.createElement('ul');
    //liElem.appendChild(ul);
  
    var titleLi = document.createElement("div")
    var titles = document.createTextNode('Title: ');  
    var a = document.createElement('a')
    var aText = document.createTextNode(bookObj.title)
    a.appendChild(aText)
    a.href = bookObj.url
    
    titleLi.appendChild(titles);
    titleLi.appendChild(a);
    
    liElem.appendChild(titleLi)
    
    var authorLi = document.createElement('div')
    authorLi.appendChild(document.createTextNode("Author: " + bookObj.author))
    liElem.appendChild(authorLi)
  
    var dateLi = document.createElement('div');
    dateLi.appendChild(document.createTextNode("Published Date: " + bookObj.date_published))
    liElem.appendChild(dateLi);
  
    var reviewsLi = document.createElement('div');
    reviewsLi.appendChild(document.createTextNode("Reviews: " + bookObj.reviews))
    liElem.appendChild(reviewsLi);
  
    var rateLi = document.createElement('div');
    rateLi.appendChild(document.createTextNode("Rating: " + bookObj.rate + "/5"))
    liElem.appendChild(rateLi);
    liElem.appendChild(document.createElement("br"));
  
    // create the remaining elements
    return liElem;
  }
  
  function sortByReviews() {
    books.sort(function (a, b) {
      return b.reviews - a.reviews;
    })
  }
  function sortByPriceLow() {
    books.sort(function (a, b) {
      return a.Price - b.Price;
    })
  }
  function sortByPriceHigh() {
    books.sort(function (a, b) {
      return b.Price - a.Price;
  
    })
  }
  function sortByRating() {
    books.sort(function (a, b) {
      return b.rate - a.rate;
  
    })
  }
  function sortByNewest() {
    books.sort(function (a, b) {
      var dataAString = Date.parse(a.date_published);
      var dataBString = Date.parse(b.date_published);
      return dataBString - dataAString;
    })
  } function sortByOldest() {
    books.sort(function (a, b) {
      var dataAString = Date.parse(a.date_published);
      var dataBString = Date.parse(b.date_published);
      return dataAString - dataBString;
    })
  }
  
  function upDateDOM() {
    var ulBooks = document.getElementById('books-list')
    ulBooks.innerHTML = ''
    for (item of books) {
      ulBooks.appendChild(createBookItem(item))
    }
  }
  
  // Sort by, select event
  var select = document.getElementById("sort-books")
  select.onchange = function () {
    if (select.value === 'Default') {
      sortByReviews()
      upDateDOM()
    }
    else if (select.value === 'PriceLow') {
      sortByPriceLow()
      upDateDOM()
    }
    else if (select.value === 'PriceHigh') {
      sortByPriceHigh()
      upDateDOM()
    }
    else if (select.value === 'Rating') {
      sortByRating()
      upDateDOM()
    }
    else if (select.value === 'New') {
      console.log("test")
      sortByNewest()
      upDateDOM()
    }
    else if (select.value === 'Old') {
      sortByOldest()
      upDateDOM()
    }
  }
