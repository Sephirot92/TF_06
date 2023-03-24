export class Person {

    private name: string;
    private surname: string;
    private evidentionalNumber: string;
    public isAdult:boolean;
    private city:string;
    private street:string;
    private zipCode:string;

    constructor(name: string, surname: string, pesel:string) {
        this.name = name;
        this.surname = surname;
        this.evidentionalNumber = pesel;
        this.isAdult = this.getAge() > 17 ? true : false;
    }

    public getName() {
        return this.name;
    }

    public getAge() {
        var month = parseInt(this.evidentionalNumber.substring(2,4));
        var year = month > 20 ? (2000 + parseInt(this.evidentionalNumber.substring(0,2))): (1900 + parseInt(this.evidentionalNumber.substring(0,2)));
        month = month > 20 ? month - 20 : month;
        var day = parseInt(this.evidentionalNumber.substring(4,6));
        var birthDate = new Date(year, month-1, day);
        var difference = Math.abs(Date.now() - birthDate.getTime());
        return Math.floor((difference / (1000 * 3600 * 24))/365.25);
    }

    public getDateOfBirth () {
        var month = parseInt(this.evidentionalNumber.substring(2,4));
        var year = month > 20 ? (2000 +parseInt(this.evidentionalNumber.substring(0,2))): (1900 + parseInt(this.evidentionalNumber.substring(0,2)));
        month = month > 20 ? month - 20 : month;
        var day = parseInt(this.evidentionalNumber.substring(4,6));
        return year + "-" + month + "-" + day;
    }

    public getGender() {
        var genderScore =  Math.floor(parseInt(this.evidentionalNumber.substring(9,10)));
        return genderScore % 2 == 0 ? "Female" : "Male";
    }

    public getLivingDetails() {
        var city = this.city =! null ? this.city : "";
        var street = this.street =! null ? this.street : "";
        var zipCode = this.zipCode =! null ? this.zipCode : "";
        return city + " " + street + " " + zipCode;
    }

    public setCity(city: string) {
        this.city = city;
    }

    public setStreet(street : string){
        this.street = street;
    }

    public setZipCode(zipCode:string) {
        this.zipCode = zipCode;
    }


    public details() {
        var livingDetails = this.getLivingDetails().trim().length !== 0 ? this.getLivingDetails() : "uknown";
        return `Details of ${this.name} ${this.surname} 
        PESEL = ${this.evidentionalNumber}
        FirstName = ${this.name}
        LastName = ${this.surname}
        Age = ${this.getAge()}
        Date of birth = ${this.getDateOfBirth()}
        Gender = ${this.getGender()}
        Address = ${livingDetails}`
    }

}