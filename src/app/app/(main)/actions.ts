import { auth } from "@/services/auth"
import { prisma } from "@/services/database"
import { upsertTodoSchema } from "./schema"
import { z } from "zod"
import { error } from "console"

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

export async function upsertTodo(input: z.infer<typeof upsertTodoSchema>) {
    const session = await auth()
    const sessionUserID = session?.user?.id

    if(!sessionUserID) {
        return {
            error: 'Not authorized.',
            data: null
        }
    }

    // * UPDATE
    if ( input.id ) {

        
        const todo = await prisma.todo.findUnique({
            where: {
                id: input.id,
                userId: sessionUserID
            },
            select: {
                id: true
            }
        })

        if(!todo) {
            return {
                error: 'Not found.',
                data: null
            }
        }

        const updatedTodo = await prisma.todo.update({
            where: {
                id: input.id,
                userId: sessionUserID
            },
            data: {
                title: input.title,
                doneAt: input.doneAt
            }
        })

        return {
            error: null,
            data: updatedTodo
        }
    }

    if (!input.title) {
        return {
            error: 'Title is required',
            data: null
        }
    }

    const todo = await  prisma.todo.create({
        data: {
            title: input.title,
            userId: sessionUserID
        }
    })

    return todo
}