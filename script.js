const blackcase = document.getElementById('blackcase');
const bluecase = document.getElementById('bluecase');
const greencase = document.getElementById('greencase');
const whitecase = document.getElementById('whitecase');
const redcase = document.getElementById('redcase');

const sideblack = document.getElementById('sideblack');
const sideblue = document.getElementById('sideblue');
const sidegreen = document.getElementById('sidegreen');
const sidewhite = document.getElementById('sidewhite');
const sidered = document.getElementById('sidered');

const blackbox = document.getElementById('blackbox');
const bluebox = document.getElementById('bluebox');
const greenbox = document.getElementById('greenbox');
const whitebox = document.getElementById('whitebox');
const redbox = document.getElementById('redbox');

const blackmain = document.getElementById('blackmain');
const bluemain = document.getElementById('bluemain');
const greenmain = document.getElementById('greenmain');
const whitemain = document.getElementById('whitemain');
const redmain = document.getElementById('redmain');

const gradient = document.querySelector('body');

function changeBlack() {
    console.log (bluemain.style.display.valueOf())
    bluemain.style.display = 'none';
    redmain.style.display = 'none';
    whitemain.style.display = 'none';
    greenmain.style.display = 'none';

    sideblue.style.display = 'none';
    sidered.style.display = 'none';
    sidewhite.style.display = 'none';
    sidegreen.style.display = 'none';

    sideblack.style.display = 'inline-block';

    blackbox.style.display = 'none';
    bluebox.style.display = 'inline-block';
    whitebox.style.display = 'inline-block';
    greenbox.style.display = 'inline-block';
    redbox.style.display = 'inline-block';

    blackcase.style.display = 'inline-block';
    bluecase.style.display = 'none';
    whitecase.style.display = 'none';
    greencase.style.display = 'none';
    redcase.style.display = 'none';

    blackmain.style.display = 'inline-block';

    gradient.style.background = 'linear-gradient(to bottom, #B6B6B6, white)';
    gradient.style.backgroundRepeat = 'no-repeat';
}

function changeGreen() {
    console.log (bluemain.style.display.valueOf())
    bluemain.style.display = 'none';
    blackmain.style.display = 'none';
    redmain.style.display = 'none';
    whitemain.style.display = 'none';

    blackcase.style.display = 'none';
    bluecase.style.display = 'none';
    whitecase.style.display = 'none';
    greencase.style.display = 'inline-block';
    redcase.style.display = 'none';

    sideblue.style.display = 'none';
    sidered.style.display = 'none';
    sidewhite.style.display = 'none';
    sideblack.style.display = 'none';

    sidegreen.style.display = 'inline-block';

    greenbox.style.display = 'none';
    bluebox.style.display = 'inline-block';
    whitebox.style.display = 'inline-block';
    blackbox.style.display = 'inline-block';
    redbox.style.display = 'inline-block';

    greenmain.style.display = 'inline-block';

    gradient.style.background = 'linear-gradient(to bottom, #DDEAD9, white)';
    gradient.style.backgroundRepeat = 'no-repeat';
}

function changeWhite() {
    console.log (bluemain.style.display.valueOf())
    bluemain.style.display = 'none';
    blackmain.style.display = 'none';
    redmain.style.display = 'none';
    greenmain.style.display = 'none';

    blackcase.style.display = 'none';
    bluecase.style.display = 'none';
    whitecase.style.display = 'inline-block';
    greencase.style.display = 'none';
    redcase.style.display = 'none';

    sideblue.style.display = 'none';
    sidered.style.display = 'none';
    sideblack.style.display = 'none';
    sidegreen.style.display = 'none';

    sidewhite.style.display = 'inline-block';

    whitebox.style.display = 'none';
    bluebox.style.display = 'inline-block';
    blackbox.style.display = 'inline-block';
    greenbox.style.display = 'inline-block';
    redbox.style.display = 'inline-block';

    whitemain.style.display = 'inline-block';
    gradient.style.background = 'white';
    gradient.style.backgroundRepeat = 'no-repeat';
}

function changeRed() {
    console.log (bluemain.style.display.valueOf())
    bluemain.style.display = 'none';
    blackmain.style.display = 'none';
    greenmain.style.display = 'none';
    whitemain.style.display = 'none';

    blackcase.style.display = 'none';
    bluecase.style.display = 'none';
    whitecase.style.display = 'none';
    greencase.style.display = 'none';
    redcase.style.display = 'inline-block';

    sideblue.style.display = 'none';
    sideblack.style.display = 'none';
    sidewhite.style.display = 'none';
    sidegreen.style.display = 'none';

    sidered.style.display = 'inline-block';

    redbox.style.display = 'none';
    bluebox.style.display = 'inline-block';
    whitebox.style.display = 'inline-block';
    greenbox.style.display = 'inline-block';
    blackbox.style.display = 'inline-block';

    redmain.style.display = 'inline-block';

    gradient.style.background = 'linear-gradient(to bottom, #F3D6D1, white)';
    gradient.style.backgroundRepeat = 'no-repeat';
}

function changeBlue() {
    console.log (bluemain.style.display.valueOf())
    greenmain.style.display = 'none';
    blackmain.style.display = 'none';
    redmain.style.display = 'none';
    whitemain.style.display = 'none';

    blackcase.style.display = 'none';
    bluecase.style.display = 'inline-block';
    whitecase.style.display = 'none';
    greencase.style.display = 'none';
    redcase.style.display = 'none';

    sideblack.style.display = 'none';
    sidered.style.display = 'none';
    sidewhite.style.display = 'none';
    sidegreen.style.display = 'none';

    sideblue.style.display = 'inline-block';

    bluebox.style.display = 'none';
    blackbox.style.display = 'inline-block';
    whitebox.style.display = 'inline-block';
    greenbox.style.display = 'inline-block';
    redbox.style.display = 'inline-block';

    bluemain.style.display = 'inline-block';

    gradient.style.background = 'linear-gradient(to bottom, #CADBEB, white)';
    gradient.style.backgroundRepeat = 'no-repeat';
}