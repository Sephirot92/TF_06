import { Worker } from "./Worker";

export class WorkersTeam {
    teamName: string;
    workers:Array<Worker>;

    constructor(teamName:string) {
        this.teamName = teamName;
        this.workers =new Array<Worker>();
    }

    checkWorkers() {
        this.workers.forEach((worker : Worker) => {
            console.log("Worker " + worker.getName());
        });
    }

    addWorker(worker: Worker) {
        this.workers.push(worker);
    }

    retrieveWorker(workerName: string) {
        let findedWorker: Worker;
        findedWorker = this.workers.find(arbeits => arbeits.getName() === workerName);
        return findedWorker;
    }
}