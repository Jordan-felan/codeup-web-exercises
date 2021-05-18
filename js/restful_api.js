let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getBooks = () => {
    fetch('https://abundant-automatic-knee.glitch.me/books')
        .then(response => response.json())
        .then(books => {
            console.log(books)
            let htmlStr = "";
            for(let book of books){
                htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
            }
            $("#container").html(htmlStr)

        });
};


fetch('https://abundant-automatic-knee.glitch.me/books/1')
    .then(response => response.json())
    // .then(book => console.log(book));

//POST
let newBook = {
    "title": "Percey Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let putThis = {
    "title": "Percy Jackson and The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis),
};

$('#addPercy').click(() =>{
    fetch('https://abundant-automatic-knee.glitch.me/books', postOptions)
        .then(response => response.json())
        .then(getBooks);
});

//PUT
fetch('https://abundant-automatic-knee.glitch.me/books/6', putOptions).then(getBooks)


//PATCH
let patchThis = {
    "title": "Percy Jackson and The Titans Curse",
    "author": {
        "firstName": "TRick",
        "lastName": "TRiordan"
    }

}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis),
};



//PUT
fetch('https://abundant-automatic-knee.glitch.me/books/7', patchOptions).then(getBooks)


getBooks()