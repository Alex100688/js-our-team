"use strict";
 

const ourTeam=[
   {
    fullName: 'Wayne Barnett',
    job:'Founder & CEO',
    immage: 'wayne-barnett-founder-ceo.jpg'
   },
  
   {
    fullName: 'Angela Caroll',
    job:'Chief Editor',
    immage: 'angela-caroll-chief-editor.jpg'
   },
   
   {
    fullName: 'Walter Gordon',
    job:'Office Manager',
    immage: 'walter-gordon-office-manager.jpg'
   },

   {
    fullName: 'Angela Lopez',
    job:'Social Media Manager',
    immage: 'angela-lopez-social-media-manager.jpg'
   },

   {
    fullName: 'Scott Estrada',
    job:'Developer',
    immage: 'scott-estrada-developer.jpg'
   },

   {
    fullName: 'Barbara Ramos',
    job:'Graphic Designer',
    immage: 'barbara-ramos-graphic-designer.jpg'
   },
];
console.log(ourTeam);
for (let i = 0; i < ourTeam.length; i++) {
    const team = ourTeam[i];
    console.log(team.fullName, team.job, team.immage);
        const informationTeam =`
           <li class="list"                       >
               <h3>Nome del collaboratore: ${team.fullName}</h3>
               <div>
                <img src="img/${team.immage}"> 
               </div>
               <p>Tipo di mansione: ${team.job}</p>
           </li>
        `;
            
        document.getElementById("list-team").innerHTML += informationTeam;
        console.log(team.fullName, team.job, team.immage);
}

