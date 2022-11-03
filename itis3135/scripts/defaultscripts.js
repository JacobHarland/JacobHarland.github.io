$("p").bind("click", function(){
    $( "This is a click Event").appendTo( "body" );
});

function myAlert() {
    alert("This is an alert!");
}

function promptUser() {
    let fullName = document.getElementById("fullName").value;
    let feeling = document.getElementById("feeling").value;
    document.getElementById('greeting').innerHTML = `The Jolly Hydra welcomes you, ${fullName} !
    We're glad you are doing ${feeling}!`;
}

function celsiusToFahrenheit() {
    let celsius = prompt("Enter a number in celsius to be converted to Fahrenheit");
    alert(`${celsius}\xB0C is ${celsius * 9 / 5 + 32} \xB0F.`);
}

let totalHeadsArray = [];
function myHydraHeads() {
    let hydraHeads = document.getElementById("hydraHeads").value * 2;
    totalHeadsArray.push(hydraHeads)
    let totalHeads = totalHeadsArray.reduce((accumulator, value) => {
        return accumulator + value
    })
    document.getElementById("HydraHeadsOutput").innerHTML = `Uh-oh! The Hydra has regrown ${hydraHeads} heads! It now has ${totalHeads} heads!!`;
}

function areaFinder() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    document.getElementById('area').innerHTML = `Area: ${length * width} !`;
}

function getTodaysDate() {
    let a;
    let time;
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    setInterval(() => {
        a = new Date();
        time = 'Today Is ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + ' on ' + days[a.getDay()] + ', ' + a.getDate() + ' ' + months[a.getMonth()] + ", " + a.getFullYear();
        document.getElementById('time').innerHTML = time;
    }, 1000);
}

$(document).ready(function() {
    $('.next').on('click', function() {
        console.log('clicked')
        var currentImg = $('.active')
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10)
            nextImg.addClass('active').css('z-index', 10)
        }
    })

    $('.prev').on('click', function() {
        console.log('clicked')
        var currentImg = $('.active')
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10)
            prevImg.addClass('active').css('z-index', 10)
        }
    })
});


