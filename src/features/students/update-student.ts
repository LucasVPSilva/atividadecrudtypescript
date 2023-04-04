// UPDATE

import listStudents from "../../database"
import { UpdateStudent } from "../../types"

function updateStudent(id: string, newDate: UpdateStudent) {

    const index = listStudents.findIndex((student) => student.id === id)

    if (index === -1) {
        console.log("Nenhum aluno encontrado")
    }

    const oldDate = listStudents[index]

    listStudents[index].name = newDate.name ?? oldDate.name
    listStudents[index].cpf = newDate.cpf ?? oldDate.cpf

    console.log(listStudents);


}

export default updateStudent