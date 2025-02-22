'use client'

import { toast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { updateProfileSchema } from "../schema"
import { updateProfile } from "../actions"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SheetFooter } from "@/components/ui/sheet"
import { Session } from "next-auth"

type ProfileFormProps = {
    defaultValues: Session['user']
}

export function ProfileForm({ defaultValues } : ProfileFormProps) {
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            name: defaultValues?.name ?? '',
            email: defaultValues?.email ?? ''
        }
    })

    const onSubmit = form.handleSubmit(async (data) => {
        await updateProfile(data)
        router.refresh()

        toast({
            title: 'Saved',
            description: 'User updated successfully',
        })
    })

    return (
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: John Dee"  {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be the name displayed on your profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: john.dee@example.com" readOnly {...field} />
                  </FormControl>
                  <FormDescription className="text-blue-500" >
                    To change your email, please contact support at contato@micro-saas.com.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter>
                <Button type="submit">Save Changes</Button>
            </SheetFooter>
          </form>
        </Form>
    )
}