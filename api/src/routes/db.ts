import * as koa from 'koa'
import * as Router from 'koa-router'
import { PessoaFisica } from '../../../classes/pessoa-fisica.class'
import { db } from '../server'

const router = new Router({ prefix: '/api' });

router.get('/getLista', async (ctx: koa.Context) => {
    db.all('SELECT cpf, nome, email FROM cpfs', (ctx) => {

    });
})

/*router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});*/

export const API = router;


async function getPessoas() {
    let pessoas = new Array<PessoaFisica>()
    db.each('SELECT cpf, nome, email, telefone_fixo AS tfixo, telefone_celular AS tcel FROM cpfs', (err: Error, row) => {
        pessoas.push(new PessoaFisica(row.cpf, row.nome, row.email, row.tfixo, row.tcel));
    });
}