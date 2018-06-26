import * as Koa from 'koa';
import * as Router from 'koa-router';
import { API } from './routes/db';
import { Database } from 'sqlite3'
import * as path from 'path'

const app = new Koa();
const router = new Router();
export const db = new Database(path.resolve(__dirname, '../databases/clientes.db'), (err: Error) => {
    if (err) console.log(err)
    else console.log('Conectado ao DB');
});

app.use(API.routes());

app.listen(3000, 'localhost');

console.log('Server running on port 3000');
