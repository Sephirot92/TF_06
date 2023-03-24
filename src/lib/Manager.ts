import { Worker } from "./Worker";
import { WorkersTeam } from "./WorkersTeam";

export class Manager extends Worker {

    teams: Map<string, WorkersTeam>;

    constructor(name: string, surname: string, pesel:string, jobPosition:string) {
        super(name, surname,pesel, jobPosition);
        this.teams = new Map<string, WorkersTeam>();
    }

    addTeam(teamName:string, team:WorkersTeam) {
        this.teams.set(teamName, team);
    }

    public delegateWorker(teamName:string, workerName: string) {
        let worker: Worker;
        let workersTeamData = this.teams.get(teamName);
        worker = workersTeamData.retrieveWorker(workerName);
        worker.doWork();
    }

}
