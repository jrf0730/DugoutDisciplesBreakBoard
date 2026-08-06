const teamList = [
"ARI","ATL","BAL","BOS","CHC","CWS","CIN","CLE","COL","DET",
"HOU","KC","LAA","LAD","MIA","MIL","MIN","NYM","NYY","ATH",
"PHI","PIT","SD","SF","SEA","STL","TB","TEX","TOR","WSH"
];

const teamsContainer = document.getElementById("teams");
const counter = document.querySelector("footer h2");

let sold = 0;

teamList.forEach(team => {

    const card = document.createElement("div");

    card.className = "team";

    card.dataset.team = team;

    card.innerHTML = `
        <div class="team-name">${team}</div>
        <div class="owner">OPEN</div>
    `;

    card.addEventListener("click", () => {

        if(card.classList.contains("sold")){

            card.classList.remove("sold");

            card.querySelector(".owner").textContent = "OPEN";

            sold--;

        }else{

            card.classList.add("sold");

            card.querySelector(".owner").textContent = "SOLD";

            sold++;

        }

        counter.textContent = `Teams Sold: ${sold} / 30`;

    });

    teamsContainer.appendChild(card);

});