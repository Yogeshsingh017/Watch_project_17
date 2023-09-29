// js goes here

var dayNames;
var anInterval;

window.onload = function(){

    dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    anInterval;

    anInterval = setInterval(function(){

        var date = new Date();

        var currDay = dayNames[date.getDay()];
        var currDate = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
        var currSeconds = date.getSeconds();
        var currMinutes = date.getMinutes();
        var currHour = date.getHours();

        document.getElementById("currDay").textContent = currDay;
        document.getElementById("currDate").textContent = currDate;

        document.getElementById("secondHand").setAttribute("transform","rotate("+(currSeconds*6)+",150,150)");
        document.getElementById("minuteHand").setAttribute("transform","rotate("+(currMinutes*6)+",150,150)");
        document.getElementById("hourHand").setAttribute("transform","rotate("+((currHour*30)+(currMinutes/2))+",150,150)");

    },100);

}



// https://www.houseofwatches.co.uk/media/catalog/product/2/1/21-02-757-sekonda-mens-classic-dark-blue-dial-brown-leather-strap-watch-1662-1.jpg