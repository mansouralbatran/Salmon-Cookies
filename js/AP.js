'use strict';
let salamonstore = [];
// let randcost = [];
let totalBIG = 0;
let houres = ['6 am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('salamon');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
function SaLamoncockies(name, maxb, mainb, avragb) {
    this.name = name;
    this.maxb = maxb;
    this.mainb = mainb;
    this.avragb = avragb;
    this.avergcokebyh = [];

    this.randcost = [];
    this.total = 0,
        salamonstore.push(this);


}
SaLamoncockies.prototype.getrandhour = function () {
    for (let i = 0; i < houres.length; i++) {
        let min = Math.ceil(this.mainb);
        let max = Math.floor(this.maxb);
        console.log(this.mainb);
        let random = Math.floor(Math.random() * (max - min) + min);
        this.randcost.push(random);


    }
};
SaLamoncockies.prototype.getaveragbyhour = function () {
    for (let i = 0; i < houres.length; i++) {
        this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.avragb);
        this.total = this.total + this.avergcokebyh[i];

    }


};





function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thEl1 = document.createElement('th');
    thEl1.textContent = 'name store/houre';
    trEl.appendChild(thEl1);
    for (let i = 0; i < houres.length; i++) {
        let thEl = document.createElement('th');
        thEl.textContent = houres[i];
        trEl.appendChild(thEl);
    }
    let thDailyTotalEl = document.createElement('th');
    trEl.appendChild(thDailyTotalEl);
    thDailyTotalEl.textContent = 'Daily Location Total';
    tableEl.appendChild(trEl);
}

SaLamoncockies.prototype.render = function () {
    let trEl = document.createElement('tr');
    let thEl = document.createElement('td');
    thEl.textContent = this.name;
    trEl.appendChild(thEl);

    for (let i = 0; i < houres.length; i++) {
        let tdEl = document.createElement('td');
        tdEl.textContent = this.avergcokebyh[i];
        trEl.appendChild(tdEl);
        tableEl.appendChild(trEl);
    }
    let tdTotalEl = document.createElement('td');
    tdTotalEl.textContent = this.total;
    trEl.appendChild(tdTotalEl);
    tableEl.appendChild(trEl);

};
function getfotter() {
    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = 'total';
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);

    for (let i = 0; i < houres.length; i++) {
        let tdEl2 = document.createElement('td');
        let sum = 0;
        for (let s = 0; s < salamonstore.length; s++) {
            sum = sum + salamonstore[s].avergcokebyh[i];

        }
        totalBIG = totalBIG + sum;
        tdEl2.textContent = sum;
        trEl.appendChild(tdEl2);

    } let tdtel = document.createElement('td');
    tdtel.textContent = totalBIG;
    trEl.appendChild(tdtel);
    // trEl.remove();
}





createTableHeader();

let Seattle = new SaLamoncockies('Seattle', '65', '23', '6.3');
Seattle.getrandhour();
Seattle.getaveragbyhour();
Seattle.render();


let Tokyo = new SaLamoncockies('Tokyo', '24', '3', '1.2');
Tokyo.getrandhour();
Tokyo.getaveragbyhour();
Tokyo.render();

let Dubai = new SaLamoncockies('Dubai', '38', '20', '2.2');
Dubai.getrandhour();
Dubai.getaveragbyhour();
Dubai.render();

let Paris = new SaLamoncockies('Paris', '38', '20', '2.2');

Paris.getrandhour();
Paris.getaveragbyhour();
Paris.render();

let Lima = new SaLamoncockies('Lima', '38', '20', '2.2');

Lima.getrandhour();
Lima.getaveragbyhour();
Lima.render();

getfotter();


let form2 = document.getElementById('form1');
form2.addEventListener('submit', addstore);

function addstore(event) {
    event.preventDefault();
    let nam2 = event.target.name1.value;
    let max2 = event.target.max1.value;
    let min2 = event.target.min1.value;
    let averag2 = event.target.averag1.value;

    let newcat = new SaLamoncockies(nam2, max2, min2, averag2);

    newcat.getrandhour();
    newcat.getaveragbyhour();
   
    tableEl.removeChild(tableEl.lastChild);
    newcat.render();
    
    getfotter();


}
// getfotter();

// for (let i = 0; i < houres.length; i++) {
//     let trEl = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = salamonstore[i].name;
//     trEl.appendChild(td1);
// }
//     for (let i = 0; i < houres.length+1; i++) {
//         let td3 = document.createElement('td');
//         td3.textContent = salamonstore[i].gwk;
//         trE3.appendChild(td1);
//     }
//     td2.textContent = kittens[i].age;
//     let td3 = document.createElement('td');
//     td3.textContent = kittens[i].gwk;
//     let td4 = document.createElement('td');
//     td4.textContent = kittens[i].gwd;
//     let td5 = document.createElement('td');
//     td5.textContent = kittens[i].gwc;
//     trEl.appendChild(td1);
//     trEl.appendChild(td2);
//     trEl.appendChild(td3);
//     trEl.appendChild(td4);
//     trEl.appendChild(td5);

//     tableEl.appendChild(trEl);
// }

// let thEl = document.createElement('th');
// thEl1.textContent = 'Name';
// trEl.appendChild(thEl1);
// let thEl2 = document.createElement('th');
// thEl2.textContent = 'age';
// trEl.appendChild(thEl2);
// let thEl3 = document.createElement('th');
// thEl3.textContent = 'is good with kids';
// trEl.appendChild(thEl3);
// let thEl4 = document.createElement('th');
// thEl4.textContent = 'is good with dogs';
// trEl.appendChild(thEl4);
// let thEl5 = document.createElement('th');
// thEl5.textContent = 'is good with cats';
// trEl.appendChild(thEl5);




// let frankie = new Kitten('frankie', ['eating', 'playing', 'sleeping'], 'images/frankie.jpeg', true, false, true, 'baldee');
// frankie.getAge(2, 7);
// // frankie.render();

// let jumper = new Kitten('jumper', ['eating', 'playing', 'sleeping'], 'images/jumper.jpeg', true, true, true, 'baldee');
// jumper.getAge(4, 10);
// // jumper.render();

// let serena = new Kitten('serena', ['eating', 'playing', 'sleeping'], 'images/serena.jpeg', true, false, true, 'baldee');
// serena.getAge(2, 7);
// // serena.render();

// console.log(kittens);

// createTableHeader();

// for (let i = 0; i < kittens.length; i++) {
//     let trEl = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = kittens[i].name;
//     let td2 = document.createElement('td');
//     td2.textContent = kittens[i].age;
//     let td3 = document.createElement('td');
//     td3.textContent = kittens[i].gwk;
//     let td4 = document.createElement('td');
//     td4.textContent = kittens[i].gwd;
//     let td5 = document.createElement('td');
//     td5.textContent = kittens[i].gwc;
//     trEl.appendChild(td1);
//     trEl.appendChild(td2);
//     trEl.appendChild(td3);
//     trEl.appendChild(td4);
//     trEl.appendChild(td5);

//     tableEl.appendChild(trEl);
// }



















































// let Seattle = {
//     name: 'Seattle',
//     randcost: [],
//     Min: 23,
//     Max: 65,
//     AvgCookies: 63,
//     avergcokebyh: [],
//     total: 0,
//     getrandhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             let min = Math.ceil(this.Min);
//             let max = Math.floor(this.Max);

//             let random = Math.floor(Math.random() * (max - min) + min);
//             this.randcost.push(random);


//         }

//     },
//     getaveragbyhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
//             this.total = this.total + this.avergcokebyh[i];

//         }


//     },




//     render: function () {
//         let divEl = document.getElementById('salamon');
//         let artEL = document.createElement('article');
//         divEl.appendChild(artEL);

//         let h1el = document.createElement('h1');
//         artEL.appendChild(h1el);
//         h1el.textContent = this.name;




//         let ulel = document.createElement('ul');
//         artEL.appendChild(ulel);

//         for (let i = 0; i < houres.length; i++) {
//             let liel = document.createElement('li');
//             ulel.appendChild(liel);
//             liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



//         }
//         let li1el = document.createElement('li');
//         ulel.appendChild(li1el);
//         li1el.textContent = 'total' + this.total + 'cokes';




//     }

// };

// Seattle.getrandhour();
// Seattle.getaveragbyhour();

// Seattle.render();




// let Tokyo = {
//     name: 'Tokyo',
//     randcost: [],
//     Min: 12,
//     Max: 46,
//     AvgCookies: 42,
//     avergcokebyh: [],
//     total: 0,
//     getrandhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             let min = Math.ceil(this.Min);
//             let max = Math.floor(this.Max);

//             let random = Math.floor(Math.random() * (max - min) + min);
//             this.randcost.push(random);


//         }

//     },
//     getaveragbyhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
//             this.total = this.total + this.avergcokebyh[i];

//         }


//     },




//     render: function () {
//         let divEl = document.getElementById('salamon');
//         let artEL = document.createElement('article');
//         divEl.appendChild(artEL);

//         let h1el = document.createElement('h1');
//         artEL.appendChild(h1el);
//         h1el.textContent = this.name;




//         let ulel = document.createElement('ul');
//         artEL.appendChild(ulel);

//         for (let i = 0; i < houres.length; i++) {
//             let liel = document.createElement('li');
//             ulel.appendChild(liel);
//             liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



//         }
//         let li1el = document.createElement('li');
//         ulel.appendChild(li1el);
//         li1el.textContent = 'total' + this.total + 'cokes';




//     }

// };

// Tokyo.getrandhour();
// Tokyo.getaveragbyhour();

// Tokyo.render();



// let Dubai= {
//     name: 'Dubai',
//     randcost: [],
//     Min: 12,
//     Max: 25,
//     AvgCookies: 23,
//     avergcokebyh: [],
//     total: 0,
//     getrandhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             let min = Math.ceil(this.Min);
//             let max = Math.floor(this.Max);

//             let random = Math.floor(Math.random() * (max - min) + min);
//             this.randcost.push(random);


//         }

//     },
//     getaveragbyhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
//             this.total = this.total + this.avergcokebyh[i];

//         }


//     },




//     render: function () {
//         let divEl = document.getElementById('salamon');
//         let artEL = document.createElement('article');
//         divEl.appendChild(artEL);

//         let h1el = document.createElement('h1');
//         artEL.appendChild(h1el);
//         h1el.textContent = this.name;




//         let ulel = document.createElement('ul');
//         artEL.appendChild(ulel);

//         for (let i = 0; i < houres.length; i++) {
//             let liel = document.createElement('li');
//             ulel.appendChild(liel);
//             liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



//         }
//         let li1el = document.createElement('li');
//         ulel.appendChild(li1el);
//         li1el.textContent = 'total' + this.total + 'cokes';




//     }

// };

// Dubai.getrandhour();
// Dubai.getaveragbyhour();

// Dubai.render();


// let Paris = {
//     name: 'Paris',
//     randcost: [],
//     Min: 7,
//     Max: 39,
//     AvgCookies: 2.3,
//     avergcokebyh: [],
//     total: 0,
//     getrandhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             let min = Math.ceil(this.Min);
//             let max = Math.floor(this.Max);

//             let random = Math.floor(Math.random() * (max - min) + min);
//             this.randcost.push(random);


//         }

//     },
//     getaveragbyhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
//             this.total = this.total + this.avergcokebyh[i];

//         }


//     },




//     render: function () {
//         let divEl = document.getElementById('salamon');
//         let artEL = document.createElement('article');
//         divEl.appendChild(artEL);

//         let h1el = document.createElement('h1');
//         artEL.appendChild(h1el);
//         h1el.textContent = this.name;




//         let ulel = document.createElement('ul');
//         artEL.appendChild(ulel);

//         for (let i = 0; i < houres.length; i++) {
//             let liel = document.createElement('li');
//             ulel.appendChild(liel);
//             liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



//         }
//         let li1el = document.createElement('li');
//         ulel.appendChild(li1el);
//         li1el.textContent = 'total' + this.total + 'cokes';




//     }

// };

// Paris.getrandhour();
// Paris.getaveragbyhour();

// Paris.render();



// let Lima = {
//     name: 'Lima',
//     randcost: [],
//     Min: 12,
//     Max: 27,
//     AvgCookies: 4.2,
//     avergcokebyh: [],
//     total: 0,
//     getrandhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             let min = Math.ceil(this.Min);
//             let max = Math.floor(this.Max);

//             let random = Math.floor(Math.random() * (max - min) + min);
//             this.randcost.push(random);


//         }

//     },
//     getaveragbyhour: function () {
//         for (let i = 0; i < houres.length; i++) {
//             this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
//             this.total = this.total + this.avergcokebyh[i];

//         }


//     },




//     render: function () {
//         let divEl = document.getElementById('salamon');
//         let artEL = document.createElement('article');
//         divEl.appendChild(artEL);

//         let h1el = document.createElement('h1');
//         artEL.appendChild(h1el);
//         h1el.textContent = this.name;




//         let ulel = document.createElement('ul');
//         artEL.appendChild(ulel);

//         for (let i = 0; i < houres.length; i++) {
//             let liel = document.createElement('li');
//             ulel.appendChild(liel);
//             liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



//         }
//         let li1el = document.createElement('li');
//         ulel.appendChild(li1el);
//         li1el.textContent = 'total' + this.total + 'cokes';




//     }

// };

// Lima.getrandhour();
// Lima.getaveragbyhour();

// Lima.render();
