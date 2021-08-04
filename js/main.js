
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
		}
    });
    
    var num = 0;
    var round = 0;

    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	var today = new Date();
    	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    	var dateTime = date+' '+time+':'+today.getMilliseconds();
    	//box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
    	if (num == 0)
    		{
    			console.log("Start: " + dateTime);
    			num++;
    		}
    	else if (num == 1)
		{
			console.log("Qayam: " + dateTime);
			num++;
			round++;
		}
    	else if (num == 2)
		{
			console.log("Start of Rakuh: " + dateTime);
			num++;
		}
    	else if (num == 3)
		{
			console.log("End of Rakuh (Back to qayam): " + dateTime);
			num++;
		}
    	else if (num == 4)
		{
			console.log("Start of Qoma: " + dateTime);
			num++;
		}
    	else if (num == 5)
		{
			console.log("End of Qoma: " + dateTime);
			num++;
		}
    	else if (num == 6)
		{
			console.log("Start of First Sajdah: " + dateTime);
			num++;
		}
    	else if (num == 7)
		{
			console.log("End of First Sajdah:  " + dateTime);
			num++;
		}
    	else if (num == 8)
		{
			console.log("Start of Jalus: " + dateTime);
			num++;
		}
    	else if (num == 9)
		{
			console.log("End of Jalus: " + dateTime);
			num++;
		}
    	else if (num == 10)
		{
			console.log("Start of second Sajdah: " + dateTime);
			num++;
		}
    	else if (num == 11)
		{
			console.log("End of Second Sajdah: " + dateTime);
			num++;
		}
    	else if (num == 12)
		{
			console.log("Start of NExt Qayam: " + dateTime);
			num++;
			round++;
		}
    	else if (num == 13)
		{
			console.log("Start of NExt Rakuh: " + dateTime);
			num++;
		}
    	else if (num == 14)
		{
			console.log("End of Rakuh (Back to qayam): " + dateTime);
			num++;
		}
    	else if (num == 15)
		{
			console.log("Start of Qoma: " + dateTime);
			num++;
		}
    	else if (num == 16)
		{
			console.log("End of Qoma: " + dateTime);
			num++;
		}
    	else if (num == 17)
		{
			console.log("Start of First Sajdah: " + dateTime);
			num++;
		}
    	else if (num == 18)
		{
			console.log("End of First Sajdah (Start of Jalus): " + dateTime);
			num++;
		}
    	else if (num == 19)
		{
			console.log("Start of Jalus: " + dateTime);
			num++;
		}
    	else if (num == 20)
		{
			console.log("End of Jalus: " + dateTime);
			num++;
		}
    	else if (num == 21)
		{
			console.log("Start of second Sajdah : " + dateTime);
			num++;
		}
    	else if (num == 22)
		{
			console.log("End of Second Sajdah: " + dateTime);
			num++;
		}
    	else if (num == 23)
		{
			console.log("Start of Jalus: " + dateTime);
			num++;
		}
    	else if (num == 24)
		{
			console.log("End: " + dateTime);
			num++;
		}
    	
    });
    
};


