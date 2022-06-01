/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.
BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
*/

//creo l'array con la lista dei membri del team
const team = [
    //inserisco ogni membro come oggetto
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Carroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphics Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg",
    }
];

console.table(team);
console.log(team[0].nome)

const teamStamp=document.getElementById("teamContainer").innerHTML = 
    `<div class="team-card">
        <div class="card-image">
            <img
                src="${team[0].foto}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[0].nome}</h3>
            <p>${team[0].ruolo}</p>
        </div>
    </div>
    <div class="team-card">
        <div class="card-image">
            <img
                src="${team[1].foto}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[1].nome}</h3>
            <p>${team[1].ruolo}</p>
        </div>
    </div>
    <div class="team-card">
        <div class="card-image">
            <img
                src="${team[2].foto}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[2].nome}</h3>
            <p>${team[2].ruolo}</p>
        </div>
    </div>
    <div class="team-card">
        <div class="card-image">
            <img
                src="${team[3].foto}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[3].nome}</h3>
            <p>${team[3].ruolo}</p>
        </div>
    </div>
    <div class="team-card">
        <div class="card-image">
            <img
                src="${team[4].foto}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[4].nome}</h3>
            <p>${team[4].ruolo}</p>
        </div>
    </div>
    <div class="team-card">
        <div class="card-image">
            <img
                src="${team[5].foto}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[5].nome}</h3>
            <p>${team[5].ruolo}</p>
        </div>
    </div>`