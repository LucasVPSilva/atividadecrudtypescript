// DELETE

import listStudents from "../../database";

function deleteStudent(id: string) {

    const index = listStudents.findIndex((student) => student.id === id)

    if (index === -1) {
        console.log("Nenhum aluno encontrado")
    }

    listStudents.splice(index, 1)

    console.log(listStudents);


}

export default deleteStudent