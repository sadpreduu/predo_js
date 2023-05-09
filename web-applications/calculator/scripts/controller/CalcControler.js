
class CalcControler {

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){

        this._displayCalcEl.innerHTML = "4567";
        this._dateEl.innerHTML = "01/05/2023";
        this._timeEl.innerHTML = "00:00";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;

    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }
}