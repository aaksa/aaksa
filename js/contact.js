document.addEventListener("DOMContentLoaded", function () {
    mapContactDetails();
    currentDate();
});

function mapContactDetails() {
    let contactInfo = [
        {
            "icon": "fa fa-phone",
            "label": "+62 82192571080",
            "link": "https://wa.me/6282192571080"
        },
        {
            "icon": "fa fa-envelope",
            "label": "aksanurirwan@gmail.com",
            "link": "mailto:aksanurirwan@gmail.com"
        },
        {
            "icon": "fa fa-envelope",
            "label": "Hire Me",
            "link": "https://www.linkedin.com/in/aksa-nur-irwan-3a3596195/"
        }
    ];

    for (var i = 0; i < contactInfo.length; i++) {
        var c = contactInfo[i];
        var icon = c.icon;
        var label = c.label;
        var link = c.link;

        var card = document.createElement("a");
        card.className = "contact-card";

        card.href = link;
        card.target = "_blank";

        var iconDiv = label == "Hire Me" ? document.createElement("img") : document.createElement("i");
        if (label != "Hire Me") {
            iconDiv.className = icon;
        } else {
            iconDiv.src = icon;
            iconDiv.style.height = "24px";
        }
        iconDiv.id = "mail-icon";

        var labelDiv = document.createElement("span");
        labelDiv.className = "body2 contact-label";
        labelDiv.innerHTML = label;

        var chevDiv = document.createElement("i");
        chevDiv.id = "chevron-icon";
        chevDiv.className = "fa fa-chevron-right";

        card.appendChild(iconDiv);
        card.appendChild(labelDiv);
        card.appendChild(chevDiv);

        var contactInfoDiv = document.getElementById("contact-info-div");
        contactInfoDiv.insertBefore(card, contactInfoDiv.firstChild);
    }
}

function onMeetClick() {
    window.open("https://www.linkedin.com/in/aksa-nur-irwan-3a3596195/", '_blank');
}

function currentDate() {
    const current = new Date();
    let monthName = current.toLocaleDateString('en-US', {
        month: "long",
    });

    let date = current.getDate();

    let dayName = current.toLocaleDateString('en-US', {
        weekday: "long",
    });

    var monthText = document.getElementById("month");
    monthText.innerHTML = monthName;

    var dayText = document.getElementById("date");
    dayText.innerHTML = date;

    var weekDayText = document.getElementById("day");
    weekDayText.innerText = dayName;
}