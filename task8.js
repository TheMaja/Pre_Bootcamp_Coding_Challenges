/*
This function converts any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)
*/

function hoursMinutes(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    
    if(hours >= 2  && minutes >= 2)
	return hours + " " + "Hours, " + minutes + " " +  "Minutes" ;
    else if(hours >= 2 && minutes <= 2)
	return hours + " " + "Hours, " + minutes + " " +  "Minute" ;
    else if(hours <= 2 && minutes >= 2 )
	return hours + " " + "Hour, " + minutes + " " +  "Minutes" ;
    else if(hours <= 2 && minutes <= 2)
	return hours + " " + "Hour, " + minutes + " " +  "Minute" ;
}
