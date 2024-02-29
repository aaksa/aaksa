document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [


        {
            "title": "Hai Dentist",
            "image": "images/projects/haidentist.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.hai.dentist.haidentist"
                },
                {
                    "title": "Web",
                    "link": "https://play.google.com/store/apps/developer?id=Haidev"
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/aaksa/"
                }
            ]
        },

        {
            "title": "Hai Ternak",
            "image": "images/projects/haiternak3.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.haiternak.haiternak_mobile"
                },
                {
                    "title": "Web",
                    "link": "https://play.google.com/store/apps/developer?id=Haidev"
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/aaksa/"
                }
            ]
        },
        {
            "title": "Sahabat Multi Teknik",
            "image": "images/projects/sahabatMT.png",
            "type": "Open Source",
            "labels": [
                // {
                //     "title": "Play",
                //     "link": "https://play.google.com/store/apps/details?id=com.haiternak.haiternak_mobile"
                // },
                // {
                //     "title": "Web",
                //     "link": "https://play.google.com/store/apps/developer?id=Haidev"
                // },
                {
                    "title": "GitHub",
                    "link": "https://github.com/aaksa/"
                }
            ]
        },

        {
            "title": "Ai Dentist",
            "image": "images/projects/aidentist.png",
            "type": "Open Source",
            "labels": [
                // {
                //     "title": "Play",
                //     "link": "https://play.google.com/store/apps/details?id=com.haiternak.haiternak_mobile"
                // },
                // {
                //     "title": "Web",
                //     "link": "https://play.google.com/store/apps/developer?id=Haidev"
                // },
                {
                    "title": "GitHub",
                    "link": "https://github.com/aaksa/"
                }
            ]
        },
    ];


    let projects3 = [
        {
            "title": "Simaster Student",
            "image": "images/projects/Student.png",
            "type": "Close Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=id.ac.ugm.student.vnext.simaster&hl=id"
                },
            ]
        },
        {
            "title": "Simaster Lecturer",
            "image": "images/projects/Lecturer.png",
            "type": "Close Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=id.ac.ugm.student.vnext.simaster&hl=id"
                },
            ]
        },
    ]


    let projects2 = [

        {
            "title": "Arch Master",
            "image": "images/projects/upwork/Upwork10.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Unity Games (70 Projects)",
            "image": "images/projects/Icepanic.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },


        {
            "title": "Space Road",
            "image": "images/projects/upwork/Upwork21.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Figure Sort",
            "image": "images/projects/upwork/Upwork20.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork19.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork18.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork17.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork16.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork15.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork14.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork13.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork12.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork11.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },


        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork09.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork08.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },

        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork07.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork06.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork05.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork04.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork03.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork02.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },
        {
            "title": "Upwork",
            "image": "images/projects/upwork/Upwork01.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://drive.google.com/drive/folders/1eaaIXb_Zoeex7C8eXuyzFX33tURZV39P?usp=sharing"
                },
            ]
        },


    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "15px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }


    for (var i = 0; i < projects2.length; i++) {
        var project = projects2[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "15px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects2");
        projectsDiv.appendChild(card);
    }


    for (var i = 0; i < projects3.length; i++) {
        var project = projects3[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "15px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects3");
        projectsDiv.appendChild(card);
    }
}