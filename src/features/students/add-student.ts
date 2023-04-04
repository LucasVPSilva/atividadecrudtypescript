


// REGISTER

import listStudents from "../../database";
import { Student } from "../../types";

function addStudent(newStudent: Student) {
    if (listStudents.some((student) => student.cpf === newStudent.cpf)) {
        console.log("Já existe um registro com esse CPF!");
        return
    }


    listStudents.push(newStudent)
    console.log(listStudents)
}


export default addStudent