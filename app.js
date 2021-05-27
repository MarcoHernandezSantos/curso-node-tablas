
const {crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

const colors = require('colors');
console.clear();



crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, colors.rainbow(' creado ')))
.catch(err => console.log(err));



//console.log(process.argv);
//console.log(argv);


//console.log('base: yargs', argv.base);


// const [,,arg3 = 'base=5']= process.argv; //arg3 = 'base = 5 ' es un argumento por default por si no me envian nada 
// const [, base = 5]=arg3.split('=');


//console.log(base); 
// const base = 6;






// // fs.writeFile( `tabla-${base}.txt`,salida,(err) =>{
// //     if(err) throw err;
// //     console.log(`tabla-${base}.txt creado`);    
// // });

// fs.writeFileSync( `tabla-${base}.txt`,salida);
// console.log(`tabla-${base}.txt creada `);

