import { areaOfCircle, areaOfRectangle } from './area-util';

document.addEventListener('DOMContentLoaded', function () {
    registerBtnCbAtfterDomReady();
}, false);

const circleAreaCb = function () {
    const radius = document.getElementById("circle-radius").value;
    document.getElementById("circle-area").value = areaOfCircle(radius);
};

const rectangleAreaCb = function () {
    const w = document.getElementById("rectangle-width").value;
    const h = document.getElementById("rectangle-height").value;
    document.getElementById("rectangle-area").value = areaOfRectangle(w, h);
};

const registerBtnCbAtfterDomReady = function () {
    document.getElementById('circle-button')
        .addEventListener('click', circleAreaCb);

    document.getElementById('rectangle-button')
        .addEventListener('click', rectangleAreaCb);
};
