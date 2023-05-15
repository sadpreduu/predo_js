
class CalcControler {

    constructor(){

        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        // this._displayCalcEl.innerHTML = "4567";
        // this._dateEl.innerHTML = "01/05/2023";
        // this._timeEl.innerHTML = "00:00";
        //let interval = 
        
        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();
            
        }, 1000);

        // setTimeout(()=>{
        //     clearInterval(interval);
        // }, 10000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        })
    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
       //console.log(buttons);
   
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag mouseover", e=> {

                console.log(btn.className.baseVal.replace("btn-"," "));
    
            })
        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);    
    }

    get displayTime (){
        return this._timeEl.innerHTML;
    }
    
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._dataAtual = value;
    }
}