'use server'
import { z } from "zod"
import { updateProfileSchema } from "./schema"
import { auth } from "@/services/auth"
import { prisma } from "@/services/database"


// * POST - TODOS
export async function updateProfile(input: z.infer<typeof updateProfileSchema>) {
    const session = await auth()
    const sessionUserID = session?.user?.id

    if(!sessionUserID) {
        return {
            error: 'Please, Log In first.',
            data: null
        }
    }

    await prisma.user.update({
        where: {
            id: sessionUserID
        },
        data: {
            name: input.name 
        }
    })
}