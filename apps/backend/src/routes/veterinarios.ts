import { Context } from "koa";
import Router from "koa-router";

export function registrarVetRoutes(mainRoute: Router) {
    const router = new Router();

    router.get('/vets', (ctx: Context) => {
        ctx.body = [
            { id: 1, name: 'Dr. Smith', specialty: 'Surgery' },
            { id: 2, name: 'Dr. Johnson', specialty: 'Dermatology' },
            { id: 3, name: 'Dr. Williams', specialty: 'Dentistry' }
        ]
    })

    mainRoute.use(router.routes())
}
