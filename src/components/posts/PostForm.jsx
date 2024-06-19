import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useData } from '../../hooks'
import { useState } from 'react'

const formSchema = z.object({
    post: z
        .string()
        .min(10, {
            message: "Ingrese un mensaje",
        })
})

export const PostForm = () => {

    const [loading, setLoading] = useState(false)
    const { createPost } = useData()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            post: "",
        },
    })


    const onSubmit = async({ post }) => {
        setLoading(true)
        const { error } = await createPost({ post })
        setLoading(false)
        if( error ){
            return
        }

        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col gap-2 mt-5">
                    <FormField
                        control={form.control}
                        name="post"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        className="W-full resize-none min-h-24"
                                        placeholder="¿Que estas pensando hoy?"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        className="self-end px-10 mt-1"
                        disabled={loading}
                    >
                        Postear
                    </Button>
                </div>
            </form>
        </Form>
    )
}
