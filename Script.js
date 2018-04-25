var books = [
    {
        title: 'A Brief History of Time',
        date_published: ' March 1, 1988',
        author: 'Stephen Hawking',
        reviews: 146,
        rate: 4.4,
        Price: 10.69,
        img: 'https://images-na.ssl-images-amazon.com/images/I/617m43n-HWL._SX331_BO1,204,203,200_.jpg',
        url: 'https://www.amazon.com/gp/product/0553380168/ref=s9_acsd_ri_bw_c_x_6_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-10&pf_rd_r=YYG5MNDW97D3HRZHCS58&pf_rd_r=YYG5MNDW97D3HRZHCS58&pf_rd_t=101&pf_rd_p=4d6f1c2c-8443-4c8c-bc55-77b7e4a2cf4a&pf_rd_p=4d6f1c2c-8443-4c8c-bc55-77b7e4a2cf4a&pf_rd_i=283155'
    }, {
        title: 'The Godfather',
        date_published: 'March 10, 1969',
        author: 'Mario Puzo',
        reviews: 398,
        rate: 4.9,
        Price: 12.81,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Godfather-Novel-Cover.png/175px-Godfather-Novel-Cover.png',
        url: 'https://www.amazon.com/Godfather-Mario-Puzo/dp/0451205766/ref=sr_1_1?s=books&ie=UTF8&qid=1521990953&sr=1-1&keywords=the+godfather'
    }, {
        title: 'Harry Potter and the Philosophers Stone',
        date_published: 'June 26, 1997',
        author: 'J. K. Rowling',
        reviews: 271,
        rate: 4.8,
        Price: 12.92,
        img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcSGDAX8oOfmUA2KCyZCyi3Ao--5K8Z5brA6GSfSqxbTLaURCwb_',
        url: 'https://www.amazon.com/Harrius-Potter-Philosophi-Lapis-Philosophers/dp/1582348251/ref=sr_1_12?s=books&ie=UTF8&qid=1521991710&sr=1-12&keywords=Harry+Potter+and+the+Philosophers+Stone'
    }, {
        title: 'Head First Design Patterns: A Brain-Friendly Guide',
        date_published: 'October 1, 2004',
        author: 'Elisabeth Freeman and Kathy Sierra',
        reviews: 293,
        rate: 4.2,
        Price: 36.06,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91bobQSPQrL.jpg',
        url: 'https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124/ref=sr_1_1?s=books&ie=UTF8&qid=1521991871&sr=1-1&keywords=Head+First+Design+Patterns'
    }

    // add more book items here
]
// Default sort
sortByReviews()
upDateDOM()

function createBookItem(bookObj) {
    /*
      <li>
        <a href="#">React Quickly: Painless web apps with React, JSX, Redux, and GraphQL</a>
        <img src="https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg"/>
          <ul>
            <li>Sep 28, 2017 </li>
            <li>Azat Mardan</li>
            <li>34 reviews</li>
            <li>4.7 stars</li>
          </ul>
      </li>
    */
    var liElem = document.createElement('li')

    var img = document.createElement('img');
    img.src = bookObj.img;
    img.width = 100;
    img.height = 150;
    liElem.appendChild(img);

    var titles = document.createTextNode('Title: ');
    liElem.appendChild(titles)

    var a = document.createElement('a')
    var aText = document.createTextNode(bookObj.title)
    a.appendChild(aText)
    a.href = bookObj.url
    liElem.appendChild(a)

    var ul = document.createElement('ul');
    liElem.appendChild(ul);

    var authorLi = document.createElement('li')
    authorLi.appendChild(document.createTextNode("Author: " + bookObj.author))
    ul.appendChild(authorLi)

    var dateLi = document.createElement('li');
    dateLi.appendChild(document.createTextNode("Published Date: " + bookObj.date_published))
    ul.appendChild(dateLi);

    var reviewsLi = document.createElement('li');
    reviewsLi.appendChild(document.createTextNode("Reviews: " + bookObj.reviews))
    ul.appendChild(reviewsLi);

    var rateLi = document.createElement('li');
    rateLi.appendChild(document.createTextNode("Rating: " + bookObj.rate + "/5"))
    ul.appendChild(rateLi);

    var priceLi = document.createElement('li');
    priceLi.appendChild(document.createTextNode("Price: " + bookObj.Price + " $"))
    ul.appendChild(priceLi);


    // create the remaining elements
    return liElem
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