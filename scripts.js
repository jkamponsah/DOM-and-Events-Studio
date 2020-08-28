// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let right = document.getElementById("right")
    let left = document.getElementById("left")
    let up = document.getElementById('up')
    let down =document.getElementById('down');
    let rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.left = '0';
    rocket.style.bottom = '0';

    // add event listeners
    takeOff.addEventListener('click', takeOffFunction);
    landing.addEventListener('click', landFunction);
    missionAbort.addEventListener('click', missionAbortFunction)
    right.addEventListener('click', rightMovement)
    left.addEventListener('click', leftMovement);
    up.addEventListener('click', upMovement)
    down.addEventListener('click', downMovement);

    function takeOffFunction() {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = " Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    }

    function landFunction() {
        if (confirm("The shuttle is landing. Landing gear engaged.")) {
            flightStatus.innerHTML = " The shuttle has landed";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = parseInt(0) ;
            rocket.style.top = '250px';
            rocket.style.left = "0px";
        }
    }

    function missionAbortFunction() {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = parseInt(0) ;
            rocket.style.top = '250px';
            rocket.style.left = "0px";


            }
    }
    
    function rightMovement() {
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    }

    function leftMovement() {
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    }

    function upMovement() {
        //rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px'
        let x = rocket.offsetTop;
        x = x - 10;
        rocket.style.top = x + 'px';
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;

    }

    function downMovement() {
        let x = rocket.offsetTop;
        x = x + 10;
        rocket.style.top = x + 'px';
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    }

}

window.onload = init;