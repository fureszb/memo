class Kartya {
  #kep
  #id
  #szuloElem
  constructor(kep, id, szuloElem) {
    this.#kep = kep;
    this.#id = id;
    this.kapcsolo=true;
    this.szereploElem = $(".imag:last-child");
    this.#szuloElem = szuloElem.append(`
    <div class='imag row'>
    <div class='col-4'>
      <img src='${kep}' alt='kep'>
      </div>
    </div>
  `);
    this.szereploElem.on("click", () => {
      console.log(this.#kep, this.#id);
      
      if (this.kapcsolo) {
        this.szereploElem.find("img").attr("src", "./kepek/hatter.jpg");
        this.kapcsolo = false;
        
      } else {
        this.szereploElem.find("img").attr("src", this.#kep);
        this.kapcsolo = true;
      }
    }); 
  }

  getKep() {
    return this.#kep;
  }
  getId() {
    return this.#id;
  }
  getSzereplo() {
    return this.szereploElem;
  }
  setKep(kep) {
    this.#kep = kep;
  }
  kattintasTrigger() {



  }
}

export default Kartya;
