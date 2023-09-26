//general
function getTextInTag(strTag, strText=""){
    return `<${strTag}>${strText}</${strTag}>`
}
function getTextInTagWithAtt(strTag, strAtt ,strText=""){
    return `<${strTag} ${strAtt}>${strText}</${strTag}>`
}

function getRandomNumber(rangeNumber){
    return Math.floor(Math.random()*(rangeNumber+1));
}

function getRandDate(){
    var maxDate= new Date(2022,0,31,23,59,59)
    var minDate= new Date(1950,0,31)
    var randomTime= getRandomNumber(maxDate.getTime()-minDate.getTime())+minDate.getTime() 
    var randDate= new Date(randomTime)
    return randDate
}

function getFullDate(dateObject){
    return dateObject.getDate() +'/'+(dateObject.getMonth()+1)+'/'+dateObject.getFullYear();
}


class Person{
    constructor(firstName,lastName,birthDate,profileImage){
        this.firstName=firstName
        this.lastName=lastName
        this.birthDate=new Date(birthDate)
        this.profileImage=profileImage
    }

    get getFullname(){
        return  `${this.firstName} ${this.lastName}`
    }

    get getAge(){
        const currDate= new Date()
        let age= currDate.getFullYear()-this.birthDate.getFullYear();
        if(currDate.getMonth()<this.birthDate.getMonth())
        {
            age--;
        }
        else if( currDate.getMonth()==this.birthDate.getMonth() && currDate.getDay()<this.birthDate.getDay()){
            age--
        }
        return age;
    }
    get canClub(){
        return this.getAge>=18;
    }
    
    render(elementID=''){
        const divContent=`
            ${getTextInTagWithAtt('img',`src="${this.profileImage}"`)}
            ${getTextInTag('h2',`name:${this.getFullname}`)}
            ${getTextInTag('h3',getFullDate(this.birthDate))}
        `
        return getTextInTagWithAtt('div',`id='${elementID}' class="personObj"`,divContent)

    }
    
    


}
/task 1/;

// const persArr=[]
// persArr.push(new Person('shahaf','segal',getRandDate(),'https://randomwordgenerator.com/img/picture-generator/54e1d1444d50b10ff3d8992cc12c30771037dbf85254794075297ad39f45_640.jpg'));
// persArr.push(new Person('mario','AA plumber',getRandDate(),'https://randomwordgenerator.com/img/picture-generator/50e5d6444a57b10ff3d8992cc12c30771037dbf852547941772d7bdd974b_640.jpg'));
// persArr.push(new Person('noah','ann',getRandDate(),'https://randomwordgenerator.com/img/picture-generator/57e9d5444e5ba814f1dc8460962e33791c3ad6e04e50744172287ad2944cc3_640.jpg'));
// persArr.push(new Person('wook','airs',getRandDate(),'https://randomwordgenerator.com/img/picture-generator/53e1d6444b56ab14f1dc8460962e33791c3ad6e04e5074417c2f7cd39644c6_640.jpg'));
// persArr.push(new Person('john','thina',getRandDate(),'https://randomwordgenerator.com/img/picture-generator/51e6dd444a54b10ff3d8992cc12c30771037dbf85254794e732f7bd49344_640.jpg'));
// persArr.push(new Person('barock','obamba',getRandDate(),'https://randomwordgenerator.com/img/picture-generator/g5250712ab7caffaeb21947b86dc6f2af887166d6c561491a832264768b9e2155c50e14b2b03a94c16c6c97e45a30d6d9_640.jpg'));

// persArr.forEach((anyPerson,persIndex) => {
//     mainDiv.innerHTML+=anyPerson.render(`pers${persIndex}`)
// });


/task 2/;

class Car{
    #currentSpeed;
    constructor(model,year,brand,price,maxSpeed,image){
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.image = image;
        this.#currentSpeed=0
    }
    accelarate(){
        if(this.#currentSpeed+20>=this.maxSpeed){
            this.#currentSpeed=this.maxSpeed
            return true;
        }
        this.#currentSpeed+=20;
        return false
    }
    stop(){
        if(this.#currentSpeed-20<=0){
            this.#currentSpeed=0
            return true;
        }
        this.#currentSpeed-=20;
        return false
    }

    get model() {
        return this.model;
    }

    set model(model) {
        this.model = model;
    }

    get year() {
        return this.year;
    }

    set year(year) {
        this.year = year;
    }
    get brand() {
        return this.brand;
    }
    
    set brand(brand) {
        this.brand = brand;
    }
    get price(){
        return this.price
    }
    set price(price){
        this.price=price

    }
    get maxSpeed(){
        return this.maxSpeed
    }
    set maxSpeed(newMaxSpeed){
        this.maxSpeed=newMaxSpeed;
        this.#currentSpeed= Math.min(this.maxSpeed,this.#currentSpeed)
    }
    get getCarSpeed(){
        return this.#currentSpeed;
    }
}