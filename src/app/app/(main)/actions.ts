import { auth } from "@/services/auth"
import { prisma } from "@/services/database"

export async function getUserTodos() {
    // Verificar o usuario logado 
    // Retornar suas taregas
    const session = await auth()

    const todos = await  prisma.todo.findMany({
        where: {
            userId: session?.user?.id
        }
    })

    return todos
}