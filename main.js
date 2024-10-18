// Battery Charge Animation

function chargeBattery(){

    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";

    
    // change icon in 1 sec
    setTimeout(function(){
        battery.innerHTML = "&#xf243;";
    }, 1000);


    // change icon in 2 sec
    setTimeout(function(){
        battery.innerHTML = "&#xf242;";
    }, 2000);


    // change icon in 3 sec
    setTimeout(function(){
        battery.innerHTML = "&#xf241;";
    }, 3000);

    // change icon in 4 sec
    setTimeout(function(){
        battery.innerHTML = "&#xf240;";
    }, 4000);

}

// Run Animation
chargeBattery();

// Run Animation every 5 seconds
setInterval(chargeBattery, 5000);