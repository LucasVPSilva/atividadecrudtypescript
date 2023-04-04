
interface Student {
    id: string;
    register: string;
    name: string;
    cpf: string;
}

type UpdateStudent = Omit<Partial<Student>, "id" | "register">


export { Student, UpdateStudent };