// let API = 'https://www.omdbapi.com/?apikey=b91406d9=';

// let API = 'https://www.omdbapi.com/?i=tt3896198&apikey=b91406d9';

// let API = 'https://www.omdbapi.com/?apikey=61e576a4&t=';

// let API = 'https://www.omdbapi.com/?apikey=b91406d9&='

//  let API = 'https://www.omdbapi.com/?apikey=b91406d9&='

// API ='https://www.omdbapi.com/?i=tt3896198&apikey=b91406d9&='

// let API = 'https://www.omdbapi.com/?apikey=61e576a4&t=';

let API = 'https://www.omdbapi.com/?i=tt3896198&apikey=c89a78a1'

let loadingStatus = false;


let btn = document.getElementById('btn');
userdetail.style.display = 'block'
let main = document.getElementById('main-page');
main.style.display = 'none'

function user(){
    let name = document.getElementById('name');
    document.getElementById('username.innerText');
    username.innerText='Welcome '+ name.value;
    name.value='';
    name.style.display= 'none';
    btn.style.display = 'none'
    main.style.display = 'block'
}
// function login() {
//     userdetail.style.display = 'none'
//     main.style.display = 'block'
// }


function checkstatus() {
    let detail = document.getElementById('detail');
    detail.style.display = 'none';

    let loader = document.getElementById('loader');
    if (loadingStatus == true) {
        loader.classList.add('loader')
    }
    else {
        loader.classList.remove('loader')
    }
}

let moviename = document.getElementById('moviename');
let moviedetail = document.getElementById('moviedetail');
let img = document.getElementById('img');
let year = document.getElementById('year');


function search() {

    loadingStatus = true;
    checkstatus();

    fetch(API).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);

        moviename.innerText = data.Title
        moviename.classList.add('text');
        moviedetail.innerText = data.Plot
        img.src = data.Poster
        year.innerText = data.Year

        loadingStatus = false;
        checkstatus()
    })

}