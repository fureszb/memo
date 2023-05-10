class Kartya {
  constructor(kep, id, szuloElem) {

    szuloElem.append(`<div class='kep'>
    <img src="" alt="kep">
    </div>`);
    this.szereploElem = $(".kep:last-child");

    this.kep = getKep(kep);
    this.id = this.getId(id);
    this.szereploElem.on("click", function () {
      
    });
  }
  getKep(kep) {
    this.kep = kep;
  }
  getId(id) {
    this.id = id;
  }
}
