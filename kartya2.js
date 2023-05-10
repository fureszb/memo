export class kartya2 {
    #kep
    #id
    constructor(kep, id, szuloElem) {
        this.#id = id;
        this.#kep = kep;
        szuloElem.append(
            `<div class="imag">
            <img src = "${kep}" alt = "kep">
        </div>`
        );
        this.elem = $(".imag:last-child");
        this.kapcsolo = true;
        this.elem.on("click", () => {
            console.log(this.#kep, this.#id)
            if (this.kapcsolo) {
                this.elem.find("img").attr("src", "./kepek/hatter.jpg");
                this.kapcsolo= false;
            }
            else {
                this.elem.find("img").attr("src", this.#kep);
                this.kapcsolo= true;
            }
        });
    }
}

export default kartya2;