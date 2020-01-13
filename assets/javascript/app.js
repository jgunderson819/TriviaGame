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

var json = {
    title: "State Capitals",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 420,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Alabama",
                    title: "What is the state capital of Alabama",
                    choices: [
                        "Birmingham", "Mobile", "Montgomery", "Huntsville"
                    ],
                    correctAnswer: "Montgomery"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Alaska",
                    title: "What is the state capital of Alaska",
                    choices: [
                        "Juneau", "Anchorage", "Sitka", "Fairbanks"
                    ],
                    correctAnswer: "Juneau"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Arizona",
                    title: "What is the state capital of Arizona",
                    choices: [
                        "Flagstaff", "Pheonix", "Tucson", "Glendale"
                    ],
                    correctAnswer: "Pheonix"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Arkansas",
                    title: "What is the state capital of Arkansas",
                    choices: [
                        "Fort Smith", "Texarkana", "Jacksonville", "Little Rock"
                    ],
                    correctAnswer: "Little Rock"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "California",
                    title: "What is the state capital of California",
                    choices: [
                        "Sacramento", "Los Angeles", "San Francisco", "San Diego"
                    ],
                    correctAnswer: "Sacramento"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Colorado",
                    title: "What is the state capital of Colorado",
                    choices: [
                        "Colorado Springs", "Denver", "Gunnison", "Aurora"
                    ],
                    correctAnswer: "Denver"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Connecticut",
                    title: "What is the state capital of Connecticut",
                    choices: [
                        "Westport", "Milford", "Greenwich", "Hartford"
                    ],
                    correctAnswer: "Hartford"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Delaware",
                    title: "What is the state capital of Delaware",
                    choices: [
                        "Newark", "Dover", "Wilmington", "Glasgow"
                    ],
                    correctAnswer: "Dover"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Florida",
                    title: "What is the state capital of Florida",
                    choices: [
                        "Jacksonville", "Orlando", "Tallahassie", "Miami"
                    ],
                    correctAnswer: "Tallahassie"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Georgia",
                    title: "What is the state capital of Georgia",
                    choices: [
                        "Augusta", "Columbus", "Atlanta", "HuntsvilleSavannah"
                    ],
                    correctAnswer: "Atlanta"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Hawaii",
                    title: "What is the state capital of Hawaii",
                    choices: [
                        "Honolulu", "Pearl City", "Hilo", "Kailua"
                    ],
                    correctAnswer: "Honolulu"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Idaho",
                    title: "What is the state capital of Idaho",
                    choices: [
                        "Meridian", "Boise", "Nampa", "Idaho Falls"
                    ],
                    correctAnswer: "Boise"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Illinois",
                    title: "What is the state capital of Illinois",
                    choices: [
                        "Chicago", "Rockford", "Springfield", "Joliet"
                    ],
                    correctAnswer: "Springfield"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Indianna",
                    title: "What is the state capital of Indianna",
                    choices: [
                        "Indiannapolis", "Gary", "Elkhart", "Fort Wayne"
                    ],
                    correctAnswer: "Indiannapolis"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Iowa",
                    title: "What is the state capital of Iowa",
                    choices: [
                        "Cedar Rapids", "Davenport", "Des Moines", "Ames"
                    ],
                    correctAnswer: "Des Moines"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Kansas",
                    title: "What is the state capital of Kansas",
                    choices: [
                        "Kansas City", "Topeka", "Wichita", "Shawnee"
                    ],
                    correctAnswer: "Topeka"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Kentucky",
                    title: "What is the state capital of Kentucky",
                    choices: [
                        "Louisville", "Lexington", "Richmond", "Frankfort"
                    ],
                    correctAnswer: "Frankfort"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Louisianna",
                    title: "What is the state capital of Louisianna",
                    choices: [
                        "New Orleans", "Baton Rouge", "Shreveport", "Lafayette"
                    ],
                    correctAnswer: "Baton Rouge"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Maine",
                    title: "What is the state capital of Maine",
                    choices: [
                        "Portland", "Lewiston", "Augusta", "Bangor"
                    ],
                    correctAnswer: "Augusta"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Maryland",
                    title: "What is the state capital of Maryland",
                    choices: [
                        "Baltimore", "Annapolis", "Frederick", "Rockville"
                    ],
                    correctAnswer: "Annapolis"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Alabama",
                    title: "What is the state capital of Alabama",
                    choices: [
                        "Birmingham", "Mobile", "Mongomery", "Huntsville"
                    ],
                    correctAnswer: "Mongomery"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Massachusetts",
                    title: "What is the state capital of Massachusetts",
                    choices: [
                        "Boston", "Springfield", "Cambridge", "Lowell"
                    ],
                    correctAnswer: "Boston"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Michigan",
                    title: "What is the state capital of Michigan",
                    choices: [
                        "Flint", "Detroit", "Ann Arbor", "Lansing"
                    ],
                    correctAnswer: "Lansing"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Minnesota",
                    title: "What is the state capital of Minnesota",
                    choices: [
                        "St. Paul", "Minneapolis", "Duluth", "St. Cloud"
                    ],
                    correctAnswer: "St. Paul"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Mississippi",
                    title: "What is the state capital of Mississippi",
                    choices: [
                        "Gulfport", "Jackson", "Biloxi","Southaven"
                    ],
                    correctAnswer: "Jackson"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Missouri",
                    title: "What is the state capital of Missouri",
                    choices: [
                        "St. Louis", "Jefferson City", "Kansas City", "Independence"
                    ],
                    correctAnswer: "Jefferson City"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Montana",
                    title: "What is the state capital of Montana",
                    choices: [
                        "Missoula", "Helena", "Billings", "Bozeman"
                    ],
                    correctAnswer: "Helena"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Nebraska",
                    title: "What is the state capital of Nebraska",
                    choices: [
                        "Omaha", "Lincoln", "Bellevue", "Grand Island"
                    ],
                    correctAnswer: "Lincoln"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Nevada",
                    title: "What is the state capital of Nevada",
                    choices: [
                        "Carson City", "Las Vegas", "Henderson", "Reno"
                    ],
                    correctAnswer: "Carson City"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "New Hampshire",
                    title: "What is the state capital of New Hampshire",
                    choices: [
                        "Manchester", "Dover", "Concord", "Nashua"
                    ],
                    correctAnswer: "Concord"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "New Jersey",
                    title: "What is the state capital of New Jersey",
                    choices: [
                        "Trenton", "Newark", "Jersey City", "Patterson"
                    ],
                    correctAnswer: "Trenton"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "New Mexico",
                    title: "What is the state capital of New Mexico",
                    choices: [
                        "Albequerque", "Santa Fe", "Los Cruces", "Rio Rancho"
                    ],
                    correctAnswer: "Santa Fe"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "New York",
                    title: "What is the state capital of New York",
                    choices: [
                        "New York", "Albany", "Buffalo", "Rochester"
                    ],
                    correctAnswer: "Albany"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "North Carlina",
                    title: "What is the state capital of North Carolina",
                    choices: [
                        "Charlotte", "Raleigh", "Greensboro", "Wilmington"
                    ],
                    correctAnswer: "Raleigh"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "North Dakota",
                    title: "What is the state capital of North Dakota",
                    choices: [
                        "Grand Forks", "Minot", "Fargo", "Bismarck"
                    ],
                    correctAnswer: "Bismarck"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Ohio",
                    title: "What is the state capital of Ohio",
                    choices: [
                        "Cincinatti", "Cleveland", "Toledo", "Columbus"
                    ],
                    correctAnswer: "Columbus"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Oklahoma",
                    title: "What is the state capital of Oklahoma",
                    choices: [
                        "Oklahoma City", "Tulsa", "Norman", "Lawton"
                    ],
                    correctAnswer: "Oklahoma City"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Oregon",
                    title: "What is the state capital of Oregon",
                    choices: [
                        "Portland", "Salem", "Eugene", "Bend"
                    ],
                    correctAnswer: "Salem"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Pennsylvania",
                    title: "What is the state capital of Pennsylvania",
                    choices: [
                        "Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"
                    ],
                    correctAnswer: "Harrisburg"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Rhode Island",
                    title: "What is the state capital of Rhode Island",
                    choices: [
                        "Cranston", "Pawtucket", "Providence", "Woonsocket"
                    ],
                    correctAnswer: "Providence"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "South Carolina",
                    title: "What is the state capital of South Carolina",
                    choices: [
                        "Columbia", "Charleston", "Greenville", "Rock Hill"
                    ],
                    correctAnswer: "Columbia"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "South Dakota",
                    title: "What is the state capital of South Dakota",
                    choices: [
                        "Souix Falls", "Rapid City", "Pierre", "Aberdeen"
                    ],
                    correctAnswer: "Pierre"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Tennessee",
                    title: "What is the state capital of Tennessee",
                    choices: [
                        "Knoxville", "Nashville", "Memphis", "Chattanooga"
                    ],
                    correctAnswer: "Nashville"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Texas",
                    title: "What is the state capital of Texas",
                    choices: [
                        "Dallas", "San Antonio", "Houston", "Austin"
                    ],
                    correctAnswer: "Austin"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Utah",
                    title: "What is the state capital of Utah",
                    choices: [
                        "Provo", "Salt Lake City", "Oren", "West Jordan"
                    ],
                    correctAnswer: "Salt Lake City"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Vermont",
                    title: "What is the state capital of Vermont",
                    choices: [
                        "South Burlington", "Rutland", "Montpeller", "Barre"
                    ],
                    correctAnswer: "Montpeller"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Virginia",
                    title: "What is the state capital of Virginia",
                    choices: [
                        "Virginia Beach", "Norfolk", "Richmond", "Chesapeake"
                    ],
                    correctAnswer: "Richmond"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Washington",
                    title: "What is the state capital of Washington",
                    choices: [
                        "Seatle", "Olympia", "Tacoma", "Spokane"
                    ],
                    correctAnswer: "Olympia"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "West Virginia",
                    title: "What is the state capital of West Virginia",
                    choices: [
                        "Charleston", "Huntington", "Parkersburg", "Morgantown"
                    ],
                    correctAnswer: "Charleston"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Wisconsin",
                    title: "What is the state capital of Wisconsin",
                    choices: [
                        "Milwaukee", "Madison", "Green Bay", "Kenosha"
                    ],
                    correctAnswer: "Madison"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Wyoming",
                    title: "What is the state capital of Wyoming",
                    choices: [
                        "Casper", "Gillette", "Cheyenne", "Huntington"
                    ],
                    correctAnswer: "Cheyenne"
                }
            ]
        },
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});




