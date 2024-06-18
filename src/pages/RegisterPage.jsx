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
    firstName     : z.string().min(1, { message: 'El nombre es requerido' }),
    lastName      : z.string().min(1, { message: 'El apellido es requerido' }),
    email         : z.string().min(1, { message: 'El correo es requerido' }).email({ message: "El correo no es valido" }),
    password      : z.string().min(6, { message: 'La contraseña es requerida' }),
    confirmPassword: z.string().min(1, { message: 'Confirme su contraseña ' }),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Las contraseñas no coinciden',
            path: ['confirmPassword']
        });
    }
});

export const RegisterPage = () => {

    const { register } = useAuth()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName : '',
            email    : '',
            password : '',
            confirmPassword: '',
        },
    })


    function onSubmit({ firstName, lastName, email, password }) {
        register({ firstName, lastName, email, password })
    }


    return (
        <AuthLayout>
            <section className="flex-1 max-w-[24rem]">
                <h1 className="text-3xl text-center font-bold mb-5 uppercase">Crear Cuenta</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-950 dark:text-slate-100">Nombre</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field} />
                                        </FormControl>
                                        <FormMessage className="font-normal" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-950 dark:text-slate-100">Apellido</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage className="font-normal" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-950 dark:text-slate-100">Correo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="jhon@example.com" {...field} />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-950 dark:text-slate-100">Confirme su contraseña</FormLabel>
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
                        <Button type="submit" className="w-full">Crear Cuenta</Button>
                    </form>
                </Form>
                <p className="mt-5 text-center">
                    ¿Ya tienes una cuenta? <Link to="/iniciar-sesion" className="hover:underline">Inicia sesión</Link>
                </p>
            </section>
        </AuthLayout>
    )
}
