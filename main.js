import Kartya from "./kartya.js";
import { LIST } from "./adat.js";
$(function () {
    const szuloElem = $(".tarolo")


   
    for (let index = 0; index < LIST.length; index++) {
        var VALAMI = new Kartya(LIST[index], index, szuloElem);
        // VALAMI[index].kattintasTrigger();
    }
    // $(window).click(function() {
    //     var szereploElem = $(".imag:last-child");
    //     $(szereploElem).trigger("click");
    // });
     
    });


