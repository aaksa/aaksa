document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "ICLABS, Faculty of Computer Science",
            "role": "Laboratory Assistant",
            "session": "April 2020 - Present",
            "logo": "images/community/flutter-isb.png",
            "link": "https://fikom.umi.ac.id/",
            "details": "ICLABS - Assisting the instructor in conducting laboratory sessions for students."
        },
        {
            "name": "Research Community (PERISAI UMI)",
            "role": "Head Of Research Departement",
            "session": "June 2020 - June 2022",
            "logo": "images/community/dsc.png",
            "link": "https://www.instagram.com/perisaiumi/",
            "details": "PERISAI UMI - Pusat Pengembangan Riset Mahasiswa Universitas Muslim Indonesia."
        },
        {
            "name": "Google Developer Student Club",
            "role": "Core Team",
            "session": "Feb 2020 - Feb 2021",
            "logo": "images/community/mlsa.png",
            "link": "https://gdsc.community.dev/universitas-muslim-indonesia/",
            "details": "Google Developer Student Club - Collaborate developing apps with other students about various technologies like flutter, tensorflow, Git and GitHub etc."
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}