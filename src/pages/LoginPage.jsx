import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { AuthLayout } from '../components'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'

const formSchema = z.object({
    email: z.string().min(1, { message: 'El correo es requerido' }).email({ message: "El correo no es valido" }),
    password: z.string().min(1, { message: 'La contraseña es requerida' }),
})

export const LoginPage = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const { login } = useAuth()

    function onSubmit({ email, password }) {
        login({email, password})
    }


    return (
        <AuthLayout>
            <section className="flex-1 max-w-[22rem]">
                <h1 className="text-3xl text-center font-bold mb-5 uppercase">Inicia Sesión</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-950 dark:text-slate-100">Correo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="user@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage className="font-normal" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-950 dark:text-slate-100">Contraseña</FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="password"
                                            placeholder="******" 
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="font-normal" />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Iniciar Sesión</Button>
                    </form>
                </Form>
                <p className="mt-5 text-center">
                    ¿No tienes una cuenta? <Link to="/crear-cuenta" className="hover:underline">Regístrate</Link>
                </p>
            </section>
        </AuthLayout>
    )
}
