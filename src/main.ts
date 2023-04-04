import { addStudent, deleteStudent, findById, updateStudent } from "./features/students"










addStudent({ id: "2023", register: "2023-03", name: "Lucas", cpf: "111.222.333-44" })
addStudent({ id: "2025", register: "2023-04", name: "Bruna", cpf: "121.322.333-44" })

findById("2023")

updateStudent("2023", { name: "Lucas Silva", cpf: "111.222.333-44" })

deleteStudent("2023")