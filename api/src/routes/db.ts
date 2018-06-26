import * as koa from 'koa'
import * as Router from 'koa-router'
import { PessoaFisica } from '../../../classes/pessoa-fisica.class'
import { db } from '../server'
import { emit } from 'cluster';

const router = new Router({ prefix: '/api' });

router.get('/getLista', async (ctx) => {
    let respostas = new Array<PessoaFisica>();
    await new Promise((resolve, reject) => {
        db.each('SELECT cpf, nome, email FROM cpfs', (err, row) => {
            respostas.push(new PessoaFisica(row.cpf, row.nome, row.email));
        }, (err) => {
            if (err) console.log(err)
            else resolve();
        });
    });
    ctx.body = JSON.stringify(respostas);
    console.log('Depois da Query');
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