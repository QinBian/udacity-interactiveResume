//Bio section
var bio = {
    name: "Qin Bian",
    role: "Front-end Developer",
    welcomeMessage: "Welcome to my website",
    contacts: {
        mobile: "510-610-710",
        email: "qbian@cmu.edu",
        github: "qinbian",
        twitter: "qin.bian",
        location: "Pittsburgh, PA"
    },
    skills: ["programming", "illustration", "sketch"],
    bioPic: "./images/fry.jpg"
};

//Add display property to the bio object
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Qin Bian");
    var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Developer");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

//Education section
var education = {
    schools: [{
            name: "Carnegie Mellon University",
            location: "Pittsburgh, PA",
            degree: "Master",
            majors: ["Human-Computer Interaction"],
            dates: "2017 - 2018",
            url: "https://www.cmu.edu/"
        },
        {
            name: "University of California, Berkeley",
            location: "Berkeley, CA",
            degree: "Bachelor",
            majors: ["Psychology"],
            dates: "2012 - 2016",
            url: "http://www.berkeley.edu/"
        }
    ],
    onlineCourses: [{
        title: "Front-End Nanodegree Program",
        school: "Udacity",
        dates: "June 2017 - present",
        url: "https://www.udacity.com/"
    }]
};

//add display property to the education object
education.display = function() {
    //display schools
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolMaj = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolMaj);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (education.schools[i].majors.length > 0) {
            var majString = "";
            for (var x = 0; x < education.schools[i].majors.length; x++) {
                var maj = education.schools[i].majors[x];
                if (majString === "") {
                    majString = maj;
                } else {
                    majString = majString + ", " + maj;
                }
            }
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", majString);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    //display online courses
    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var onlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(onlineSchoolInfo);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

//Work section
var work = {
    jobs: [{
            employer: "ZapLabs",
            title: "UX Researcher",
            location: "Emeryville, CA",
            dates: "June 2016 - May 2017",
            description: "Organized various user testings"
        },
        {
            employer: "Food and Brand Lab, Cornell University",
            title: "Summer Research Assistant",
            location: "Ithaca, NY",
            dates: "May 2014 - August 2014",
            description: "Carried out experiments and wrote up reports"
        }
    ],
};

//add display property in the work object
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formatedEmployer + formattedTitle;
        //append the formttedEmployerTitle to the last element in work-entry
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        //var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

//Project section
var projects = {
    projectList: [{
            title: "Interactive Website",
            dates: "June 2017",
            description: "this is an interactive website",
            images: ["images/197x148.gif"]
        },
        {
            title: "Interactive Resume",
            dates: "July 2017",
            description: "this is an interactive resume",
            images: []
        }
    ]
};

//add display property in the project object
projects.display = function() {
    for (var i = 0; i < projects.projectList.length; i++) {
        //console.log(i);
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projectList[i].title);
        $(".project-entry:last").append(formattedprojectTitle);

        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projectList[i].dates);
        $(".project-entry:last").append(formattedprojectDates);

        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projectList[i].description);
        $(".project-entry:last").append(formattedprojectDescription);

        if (projects.projectList[i].images.length > 0) {
            for (var x = 0; x < projects.projectList[i].images.length; x++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projectList[i].images[x]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);