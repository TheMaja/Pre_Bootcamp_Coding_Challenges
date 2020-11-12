function hoursminutes(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    var time = { hrs:hours , min:minutes};
    if(hours < 2)
	return time.hrs + " " + "Hour, " + time.min + " " +  "Minutes" ;
    else
	return time.hrs + " " + "Hours, " + time.min + " " +  "Minutes" ;
}
