// let API = 'https://www.omdbapi.com/?apikey=b91406d9=';

// let API = 'https://www.omdbapi.com/?i=tt3896198&apikey=b91406d9';

// let API = 'https://www.omdbapi.com/?apikey=61e576a4&t=';

// let API = 'https://www.omdbapi.com/?apikey=b91406d9&='

//  let API_Movie= 'http://www.omdbapi.com/?apikey=b91406d9&='

// API_Movie='https://www.omdbapi.com/?i=tt3896198&apikey=b91406d9&='

// let API = 'https://www.omdbapi.com/?apikey=61e576a4&t=';

let API = 'http://www.omdbapi.com/?i=tt3896198&apikey=c89a78a1'

let loadingStatus = false;



function user() {
    let userinput = document.getElementById('userinput');
    document.getElementById('userdetail.innerText');
    userdetail.innerText = 'Welcome ' + userinput.value;
    userinput.value = ''
}

let main = document.getElementById('main-page');
main.style.display= 'none'
function user(){
    let name = document.getElementById('name').value;
    document.getElementById('username');
    username.innerText='Welcome '+ name.value;
    name.value='';
    name.style.display= 'none';
}
function login() {
    let user = document.getElementById('user');
    user.style.display = 'none'
    main.style.display= 'block'
}


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

        loadingStatus = false;
        checkstatus()
    })

}