import { Person } from "./Person";

export class Worker extends Person {

    private jobPosition: string;

    constructor(name: string, surname: string, pesel:string, jobPosition: string){
        super(name, surname,pesel);
        this.jobPosition = jobPosition;
    }

    getJobPosition(): string {
        return this.jobPosition;
    }

    public doWork() {
        console.log("This is " + this.getName() + " my job is " + this.jobPosition + "and i\'m working now." );
    }
}