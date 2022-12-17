const   inputs = document.querySelectorAll('.controls input')
// console.log(inputs);

// this.dataset je deo iz HTML koji ti ocitava sve "BILOSTA" vrednosti koje si dodao kao "data-BILOSTA" i koliko god da ih imas ocitace ti pomocu ovoga
// da bi tacno znao sta ti se updatuje dao si svakom segmentu "name"koji je jednak varijablama
// selekyujemo ceo dukument "document.documentElement", menjamo mu stil "style" tako sto menjamo property "setProperty" sve varijable --${this.name} i updatujes "this.value" plus posto je value samo broj dodajes na kraju i sufiks "px" da bi live menjalo
function liveUpdate () {
    // console.log(this.value);
    const sufiks = this.dataset.sizing || '';
    // console.log(sufiks);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + sufiks);

}

// pravimo sada da nam live printuje u konzoli fuknciju "liveUpdate" promenu "change", a i da printa dok pomeramo mozemo da pratimo i "mosemove"
inputs.forEach(input => input.addEventListener('change', liveUpdate));
inputs.forEach(input => input.addEventListener('mousemove', liveUpdate));