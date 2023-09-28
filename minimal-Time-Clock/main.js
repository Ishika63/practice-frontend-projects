function showTime(){
    
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var mode = "AM";

    var diplayHours = document.getElementById("hours");
    var diplayMinutes = document.getElementById("minutes");
    var diplaySeconds = document.getElementById("seconds");
    var diplayMode = document.getElementById("mode");

    if(hours<12){
        mode="AM";
    }else if(hours>12){
        mode="PM";
        hours=hours-12;
    }else if(hours==12){
        mode="PM";
    }

    if(hours<10)
        diplayHours.innerHTML = "0" + hours;
    else
        diplayHours.innerHTML = hours;

    if(minutes<10)
        diplayMinutes.innerHTML = "0" + minutes;
    else 
        diplayMinutes.innerHTML = minutes;

    if(seconds<10)
        diplaySeconds.innerHTML = "0" + seconds;
    else
        diplaySeconds.innerHTML = seconds;
    
    diplayMode.innerHTML = mode;
    
    setTimeout(showTime,998);
}

showTime();