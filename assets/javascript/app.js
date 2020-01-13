// Create alert to give instructuion and start timer

alert("What are the state capitals of each state?  You will have 5 minutes to get all capitals.")





// create countdown timer
    //set minutes 
    var mins = 5; 
  
    //calculate the seconds 
    var secs = mins * 60; 

    //countdown function is evoked when page is loaded 
    function countdown() { 
        setTimeout('Decrement()', 60); 
    } 
    countdown()
    //Decrement function decrement the value. 
    function Decrement() { 
        if (document.getElementById) { 
            minutes = document.getElementById("minutes"); 
            seconds = document.getElementById("seconds"); 

            //if less than a minute remaining 
            //Display only seconds value. 
            if (seconds < 59) { 
                seconds.value = secs; 
            } 

            //Display both minutes and seconds 
            //getminutes and getseconds is used to 
            //get minutes and seconds 
            else { 
                minutes.value = getminutes(); 
                seconds.value = getseconds(); 
            } 
            //when less than a minute remaining 
            //colour of the minutes and seconds 
            //changes to red 
            if (mins < 1) { 
                minutes.style.color = "red"; 
                seconds.style.color = "red"; 
            } 
            //if seconds becomes zero, 
            //then page alert time up 
            if (mins < 0) { 
                alert('time up'); 
                minutes.value = 0; 
                seconds.value = 0; 
            } 
            //if seconds > 0 then seconds is decremented 
            else { 
                secs--; 
                setTimeout('Decrement()', 1000); 
            } 
        } 
    } 

    function getminutes() { 
        //minutes is seconds divided by 60, rounded down 
        mins = Math.floor(secs / 60); 
        return mins; 
    } 

    function getseconds() { 
        //take minutes remaining (as seconds) away  
        //from total seconds remaining 
        return secs - Math.round(mins * 60); 
    } 


// create questions
var state =["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Conecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennesee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

for (i=0; i < 50;i++) {

    x = Math.floor(Math.random)*50

    







}
