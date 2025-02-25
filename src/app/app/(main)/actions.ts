'use server'
import { auth } from "@/services/auth"
import { prisma } from "@/services/database"
import { deleteTodoSchema, upsertTodoSchema } from "./schema"
import { z } from "zod"
import { error } from "console"

// * GET - TODOS
export async function getUserTodos() {
    // Verificar o usuario logado 
    // Retornar suas taregas
    const session = await auth()

    const todos = await  prisma.todo.findMany({
        where: {
            userId: session?.user?.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return todos
}

// * POST - TODOS
export async function upsertTodo(input: z.infer<typeof upsertTodoSchema>) {
    const session = await auth()
    const sessionUserID = session?.user?.id

    if(!sessionUserID) {
        return {
            error: 'Please, Log In first.',
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

    const todo = await prisma.todo.create({
        data: {
            title: input.title,
            userId: sessionUserID
        }
    })

    return todo
}

// * DELETE - TODOS
export async function deleteTodo(input: z.infer<typeof deleteTodoSchema>) {
    const session = await auth()
    const sessionUserID = session?.user?.id

    if(!sessionUserID) {
        return {
            error: 'Please, Log In first.',
            data: null
        }
    }

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

    await prisma.todo.delete({
        where: {
            id: input.id,
            userId: sessionUserID
        }
    })

    return {
        error: null,
        data: 'Todo deleted succesfully.'
    }
}

