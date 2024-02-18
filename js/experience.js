document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [

        {
            "org": "Upwork",
            "position": "Mobile and Game Developer",
            "duration": "April 2023 - Now ",
            "technologies": [
                "Flutter",
                "Unity",
                "Laravel",
            ],
            "details": [
                "Built 85 Unity and 35 Godot games for Android and Ios, spanning diverse genres.",

                "Crafted 20 Flutter apps and games for iOS and Android platforms.",

                "Developed an immersive AR app with Unity and Vuforia for seamless interaction with virtual elements in the real world."
            ]
        },

        {
            "org": "Gadjah Madah University (Project Based)",
            "position": "Mobile Developer",
            "duration": "Nov 2023 - Feb 2024 ",
            "technologies": [
                "Flutter",
            ],
            "details": [

                "Developed 2 Flutter apps for students and lecturers.",

                "Utilized the Scrum methodology in the development process.",
                
                "Integrated APIs from the backend."

            ]
        },

        {
            "org": "Hicolleagues",
            "position": "Mobile Software Engineer",
            "duration": "Aug 2022 - Dec 2022",
            "technologies": [
                "Kotlin",
                "Compose",
                "Gitlab Actions",
                "REST APIs",
                "XML"
            ],
            "details": [
                "Implemented native apps using Kotlin programming language",
                "Used GitLab for version control and collaboration with the development team",
                "Developed and maintained a Learning Management System using REST APIs",
                "Accessed end points from backend written in Go",
                "Implemented secure and scalable REST APIs for the Learning Management System",
                "Learned and implemented Continuous Integration and Continuous Deployment (CI/CD) processes using GitLab",
                "Participated in Agile software methodology, including sprints and different team structures",
            ]
        },
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}