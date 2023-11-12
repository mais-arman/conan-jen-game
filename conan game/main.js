function Character(name,strength ,health){ //strength:قوة الضرب
    this.name=name;
    this.strength=strength;
    this.health=health;

    /*
    this.attackBtn=document.querySelector(`#${this.name}-attack`);
    this.healthBtn=document.querySelector(`#${this.name}-make-health`);
    this.progress=document.querySelector(`.${this.name}-health span`);
    this.alive=document.querySelector(`#${this.name}-alive`);
    */

    this.elements=new UIElements(this.name);

}

function UIElements(name){
    this.attackBtn=document.querySelector(`#${name}-attack`);
    this.healthBtn=document.querySelector(`#${name}-make-health`);
    this.progress=document.querySelector(`.${name}-health span`);
    this.alive=document.querySelector(`#${name}-alive`);
}

Character.prototype.attack =function(e) {
    //console.log(this);
    //console.log(e);

    if(e.health>0){
    e.health -= this.strength;
    console.log(e.health);// 90

    //e.progress.style.width=`${e.health}%`
    e.elements.progress.style.width=`${e.health}%`
    console.log(e.health);
}else{
    /*
    e.attackBtn.remove()
    e.healthBtn.remove()
    e.alive.innerHTML = `<span class="text">${e.name} is died</span>`;
    */
    e.elements.attackBtn.remove()
    e.elements.healthBtn.remove()
    e.elements.alive.innerHTML = `<span class="text">${e.name} is died</span>`;

}


}

Character.prototype.status =function(){

    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`);

}

Character.prototype.makeHealth=function(){
    if(this.health<100){
        this.health +=10;
       // this.progress.style.width=`${this.health}%`
        this.elements.progress.style.width=`${this.health}%`

    }

    if(this.health>100){
        this.health =100;
    }
}

let conan =new Character('conan',10,100);
let jen =new Character('jen',10,100);

conan.attack(jen);
// this=conan
// e=jen

jen.makeHealth()
conan.status()
jen.status()

/*
conan.attackBtn.addEventListener('click',function(){
    conan.attack(jen);
})

jen.attackBtn.addEventListener('click',function(){
    jen.attack(conan);
})

conan.healthBtn.addEventListener('click',function(){
    conan.makeHealth(jen);
})

jen.healthBtn.addEventListener('click',function(){
    jen.makeHealth(conan);
})
*/

conan.elements.attackBtn.addEventListener('click',function(){
    conan.attack(jen);
})

jen.elements.attackBtn.addEventListener('click',function(){
    jen.attack(conan);
})

conan.elements.healthBtn.addEventListener('click',function(){
    conan.makeHealth(jen);
})

jen.elements.healthBtn.addEventListener('click',function(){
    jen.makeHealth(conan);
})