import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticRouter } from './routes/staticRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8002;

app.use(express.json()); //? This middleware is used to parse JSON data
app.use('/' , staticRouter);
app.use(express.urlencoded({extended:false})) //? This middleware is used to parse form data

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname,"./views"));
// const fruits = ['apple','banana','orange','mango','grapes','pomogranate'];
// app.get('/',(req,res) => {
//     res.render('home', {
//         fruit_array: fruits
//     });
// });


app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})