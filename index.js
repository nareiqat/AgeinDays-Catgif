//proj 1: age in days

function ageInDays() {
    var birthYear = prompt('Birth Year?');
    var ageInDayss = (2021-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

const reset = () => {
    document.getElementById('ageInDays').remove();
}

// proj2 : cat generator

const generateCat = () => {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src='https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}