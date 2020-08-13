var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}



document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s-signup')
});