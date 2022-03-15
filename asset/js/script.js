// Import data array dari folder js-data
import {
    objProgram
} from "./js-data/quote.js";
const qi = objProgram.quoteIndonesia;
// start jquery
$(document).ready(function () {
    $('#showAlert').click(function () {
        const rndmQuote = qi[Math.floor(Math.random() * qi.length)];
        swal({
            title: `${rndmQuote}`,
            button: "Okay",
        });
    });
});