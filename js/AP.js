'use strict';
let Seattle = {
    name: 'Seattle',
    rand: 0,
    Min: 23,
    Max: 65,
    AvgCookies: 63,
    getcokie: function (max, min) {
        this.rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(this.rand);
    },
    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;

        let h2el = document.createElement('h2');
        artEL.appendChild(h2el);
        h2el.textContent = `the max is : ${this.Max}`;

        let h3el = document.createElement('h3');
        artEL.appendChild(h3el);
        h3el.textContent = `the min is : ${this.Min}`;

        let h4el = document.createElement('h4');
        artEL.appendChild(h4el);
        h4el.textContent = `the AvgCookies is : ${this.AvgCookies}`;


        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < 15; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at${i + 6} the random is${this.rand} `;

        }




    }

};
Seattle.getcokie(Seattle.Max, Seattle.Min);

Seattle.render(Seattle.Max, Seattle.Min);


let Tokyo = {
    name: 'Tokyo',
    rand: 0,
    Min: 3,
    Max: 24,
    AvgCookies: 12,
    getcokie: function (max, min) {
        this.rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(this.rand);
    },
    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;

        let h2el = document.createElement('h2');
        artEL.appendChild(h2el);
        h2el.textContent = `the max is : ${this.Max}`;

        let h3el = document.createElement('h3');
        artEL.appendChild(h3el);
        h3el.textContent = `the min is : ${this.Min}`;

        let h4el = document.createElement('h4');
        artEL.appendChild(h4el);
        h4el.textContent = `the AvgCookies is : ${this.AvgCookies}`;


        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < 15; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at${i + 6} the random is${this.rand} `;

        }




    }

};
Tokyo.getcokie(Seattle.Max, Seattle.Min);

Tokyo.render(Seattle.Max, Seattle.Min);

let Dubai = {
    name: 'Dubai',
    rand: 0,
    Min: 11,
    Max: 38,
    AvgCookies:37,
    getcokie: function (max, min) {
        this.rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(this.rand);
    },
    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;

        let h2el = document.createElement('h2');
        artEL.appendChild(h2el);
        h2el.textContent = `the max is : ${this.Max}`;

        let h3el = document.createElement('h3');
        artEL.appendChild(h3el);
        h3el.textContent = `the min is : ${this.Min}`;

        let h4el = document.createElement('h4');
        artEL.appendChild(h4el);
        h4el.textContent = `the AvgCookies is : ${this.AvgCookies}`;


        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < 15; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at${i + 6} the random is${this.rand} `;

        }




    }

};
Dubai.getcokie(Seattle.Max, Seattle.Min);

Dubai.render(Seattle.Max, Seattle.Min);


let Paris = {
    name: 'Paris',
    rand: 0,
    Min: 20,
    Max: 38,
    AvgCookies:23,
    getcokie: function (max, min) {
        this.rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(this.rand);
    },
    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;

        let h2el = document.createElement('h2');
        artEL.appendChild(h2el);
        h2el.textContent = `the max is : ${this.Max}`;

        let h3el = document.createElement('h3');
        artEL.appendChild(h3el);
        h3el.textContent = `the min is : ${this.Min}`;

        let h4el = document.createElement('h4');
        artEL.appendChild(h4el);
        h4el.textContent = `the AvgCookies is : ${this.AvgCookies}`;


        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < 15; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at${i + 6} the random is${this.rand} `;

        }




    }

};
Paris.getcokie(Seattle.Max, Seattle.Min);

Paris.render(Seattle.Max, Seattle.Min);




let Lima = {
    name: 'Lima',
    rand: 0,
    Min: 2,
    Max: 16,
    AvgCookies:48,
    getcokie: function (max, min) {
        this.rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(this.rand);
    },
    render: function () {
        let divEl = document.getElementById('salamon');
        let artEL = document.createElement('article');
        divEl.appendChild(artEL);

        let h1el = document.createElement('h1');
        artEL.appendChild(h1el);
        h1el.textContent = this.name;

        let h2el = document.createElement('h2');
        artEL.appendChild(h2el);
        h2el.textContent = `the max is : ${this.Max}`;

        let h3el = document.createElement('h3');
        artEL.appendChild(h3el);
        h3el.textContent = `the min is : ${this.Min}`;

        let h4el = document.createElement('h4');
        artEL.appendChild(h4el);
        h4el.textContent = `the AvgCookies is : ${this.AvgCookies}`;


        let ulel = document.createElement('ul');
        artEL.appendChild(ulel);

        for (let i = 0; i < 15; i++) {
            let liel = document.createElement('li');
            ulel.appendChild(liel);
            liel.textContent = `at${i + 6} the random is${this.rand} `;

        }




    }

};
Lima.getcokie(Seattle.Max, Seattle.Min);

Lima.render(Seattle.Max, Seattle.Min);
