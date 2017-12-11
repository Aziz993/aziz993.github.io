var raceStarted = false;
var lights =[];
lights[0] = "images/red.png";
lights[1] = "images/yellow.png";
lights[2] = "images/green.png";

var width = window.innerWidth;
var x = -1;
var position1 = 0;
var position2 = 0;
var timer, timer1;

function changeImage()
{
    if(!raceStarted) {
        x++;

        if(x == 3)
        {
            x = 0;
        }

        var img = document.getElementById("light");
        var msg = document.getElementById("msg");
        img.src = lights[x];

        if (x == 0) {
            msg.innerHTML = "Get!!!!";
        }
        else if (x == 1) {
            msg.innerHTML = "Set!!!!";
        }
        else if (x == 2) {
            msg.innerHTML = "GO!!!!";
            raceStarted = true;
            race();
        }
        timer1 = setTimeout(changeImage, 2000);
    }
}

function race()
{
    if(raceStarted)
    {
        var car1 = document.getElementById("car1");
        var car2 = document.getElementById("car2");

        position1 += getRandom();
        position2 += getRandom();

        car1.style.left = position1 + "px";
        car2.style.left = position2 + "px";
        console.log(position1 + "\t" + position2);
        console.log(car1.style.left);
        if (position1 >=  width || position2 >= width) {
            raceStarted = false;
            clearInterval(timer);
            clearTimeout(timer1);
            x = 0;
            var winner = "";
            if(position1 >= width)
            {
                winner = "Car 1 Won the Race!";
            }
            else
            {
                winner = "Car 2 Won the Race!";
            }

            document.getElementById("light").src = lights[x];
            document.getElementById("msg").innerHTML = winner +"<br />Refresh the page to race again.";
        }
        else {
           timer = setInterval(race, 1000);
        }
    }
}

function getRandom()
{
    return Math.floor(Math.random() * 10 + 1);
}


