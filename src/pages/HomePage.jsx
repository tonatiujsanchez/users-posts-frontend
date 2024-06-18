import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {  MainLayout} from '@/components'

export const HomePage = () => {
    return (
        <MainLayout>
            <div className="flex flex-col gap-2 mt-5">
                <Textarea
                    className="W-full resize-none max-h-20"
                    placeholder="¿Que estas pensando hoy?"
                />
                <Button className="self-end px-8">Postear</Button>
            </div>
        </MainLayout>
    )
}
