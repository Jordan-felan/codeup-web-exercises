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


let postThis = {
    "title": "Percy Jackson and The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postThis),
};

$("#addPercy").click(() => {
    fetch("https://jungle-enshrined-couch.glitch.me/books", postOptions)
        .then(getBooks);
    fetch("https://jungle-enshrined-couch.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            for (let book of books) {
                if(book.title !== newBook.title || book.author.firstName !== newBook.author.firstName || book.author.lastName !== newBook.author.lastName) {
                    fetch("https://jungle-enshrined-couch.glitch.me/books", postOptions)
                        .then(getBooks);
                } else {
                    alert("Hey, that book already exists!");
                    break;
                }
            }
        })

});

//PUT

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
fetch('https://abundant-automatic-knee.glitch.me/books/6', putOptions).then(getBooks)


//PATCH
let patchThis = {
    "title": "Percy Jackson and The Titans Curse",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }

}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis),
};


fetch('https://abundant-automatic-knee.glitch.me/books/7', patchOptions).then(getBooks)


getBooks()



// DELETE

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#uniqueBooks").click(() => {
    let inputVal = $("#id-to-delete").val();
    fetch(`https://jungle-enshrined-couch.glitch.me/books/${inputVal}`, deleteOptions)
        .then(getBooks);
})


