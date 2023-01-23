class CalcControler {

    constructor(){

        this._displayCalc = "0"
        this.currentDate;
        this.initalize();

    }

    initalize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;

    }

    get dataAtual(){
        return this.currentDate;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }
}