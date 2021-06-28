'use strict';
let houres = ['6 am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle = {
    name: 'Seattle',
    randcost: [],
    Min: 23,
    Max: 65,
    AvgCookies: 63,
    avergcokebyh: [],
    total: 0,
    getrandhour: function () {
        for (let i = 0; i < houres.length; i++) {
            let min = Math.ceil(this.Min);
            let max = Math.floor(this.Max);

            let random = Math.floor(Math.random() * (max - min) + min);
            this.randcost.push(random);


        }

    },
    getaveragbyhour: function () {
        for (let i = 0; i < houres.length; i++) {
            this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
            this.total = this.total + this.avergcokebyh[i];

        }


    },




    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;




        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < houres.length; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



        }
        let li1el = document.createElement('li');
        ulel.appendChild(li1el);
        li1el.textContent = 'total' + this.total + 'cokes';




    }

};

Seattle.getrandhour();
Seattle.getaveragbyhour();

Seattle.render();




let Tokyo = {
    name: 'Tokyo',
    randcost: [],
    Min: 12,
    Max: 46,
    AvgCookies: 42,
    avergcokebyh: [],
    total: 0,
    getrandhour: function () {
        for (let i = 0; i < houres.length; i++) {
            let min = Math.ceil(this.Min);
            let max = Math.floor(this.Max);

            let random = Math.floor(Math.random() * (max - min) + min);
            this.randcost.push(random);


        }

    },
    getaveragbyhour: function () {
        for (let i = 0; i < houres.length; i++) {
            this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
            this.total = this.total + this.avergcokebyh[i];

        }


    },




    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;




        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < houres.length; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



        }
        let li1el = document.createElement('li');
        ulel.appendChild(li1el);
        li1el.textContent = 'total' + this.total + 'cokes';




    }

};

Tokyo.getrandhour();
Tokyo.getaveragbyhour();

Tokyo.render();



let Dubai= {
    name: 'Dubai',
    randcost: [],
    Min: 12,
    Max: 25,
    AvgCookies: 23,
    avergcokebyh: [],
    total: 0,
    getrandhour: function () {
        for (let i = 0; i < houres.length; i++) {
            let min = Math.ceil(this.Min);
            let max = Math.floor(this.Max);

            let random = Math.floor(Math.random() * (max - min) + min);
            this.randcost.push(random);


        }

    },
    getaveragbyhour: function () {
        for (let i = 0; i < houres.length; i++) {
            this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
            this.total = this.total + this.avergcokebyh[i];

        }


    },




    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;




        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < houres.length; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



        }
        let li1el = document.createElement('li');
        ulel.appendChild(li1el);
        li1el.textContent = 'total' + this.total + 'cokes';




    }

};

Dubai.getrandhour();
Dubai.getaveragbyhour();

Dubai.render();


let Paris = {
    name: 'Paris',
    randcost: [],
    Min: 7,
    Max: 39,
    AvgCookies: 2.3,
    avergcokebyh: [],
    total: 0,
    getrandhour: function () {
        for (let i = 0; i < houres.length; i++) {
            let min = Math.ceil(this.Min);
            let max = Math.floor(this.Max);

            let random = Math.floor(Math.random() * (max - min) + min);
            this.randcost.push(random);


        }

    },
    getaveragbyhour: function () {
        for (let i = 0; i < houres.length; i++) {
            this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
            this.total = this.total + this.avergcokebyh[i];

        }


    },




    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;




        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < houres.length; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



        }
        let li1el = document.createElement('li');
        ulel.appendChild(li1el);
        li1el.textContent = 'total' + this.total + 'cokes';




    }

};

Paris.getrandhour();
Paris.getaveragbyhour();

Paris.render();



let Lima = {
    name: 'Lima',
    randcost: [],
    Min: 12,
    Max: 27,
    AvgCookies: 4.2,
    avergcokebyh: [],
    total: 0,
    getrandhour: function () {
        for (let i = 0; i < houres.length; i++) {
            let min = Math.ceil(this.Min);
            let max = Math.floor(this.Max);

            let random = Math.floor(Math.random() * (max - min) + min);
            this.randcost.push(random);


        }

    },
    getaveragbyhour: function () {
        for (let i = 0; i < houres.length; i++) {
            this.avergcokebyh[i] = Math.floor(this.randcost[i] * this.AvgCookies);
            this.total = this.total + this.avergcokebyh[i];

        }


    },




    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;




        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < houres.length; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at ${houres[i]} ${this.avergcokebyh[i]} cookies `;



        }
        let li1el = document.createElement('li');
        ulel.appendChild(li1el);
        li1el.textContent = 'total' + this.total + 'cokes';




    }

};

Lima.getrandhour();
Lima.getaveragbyhour();

Lima.render();
