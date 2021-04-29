import TestJS from "./TestJs.js";
import ConsoleLogIt from "./ConsoleLogIt.js";
import getJSON from "./getJSON";
import TableGenerator from "../models/TableGenerator";

TestJS();
getJSON("", function (data) {
    console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            TableGenerator.generateTableHead(table, data);
            TableGenerator.generateTable(table, dataRecords);
        }

    });
//run npm start

