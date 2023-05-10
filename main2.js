import kartya2 from "./kartya2.js";
import { LIST } from "./adat.js";
$(function () {
    var szuloElem = $(".tarolo");
    for (let index = 0; index < LIST.length; index++) {
        var peldany = new kartya2(LIST[index],index,szuloElem);
    }
   
});