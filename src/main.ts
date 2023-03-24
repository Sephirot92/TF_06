import { Person } from "./lib/Person";
import { Worker } from "./lib/Worker";
window.addEventListener('DOMContentLoaded', function (event) {
    window.document.getElementById("btn001").addEventListener("click", function () {
        let person = new Person("Jan", "Nowak", "8503043439");
        console.log("Button Person: " + person.getName());
    });
    window.document.getElementById("btn002").addEventListener("click", function () {
        let worker = new Worker("Adam", "Pracownik", "8503043439", "digger operator");
        console.log("Button Worker: " + worker.getName());
        console.log("Job position: " + worker.getJobPosition());
    });
});