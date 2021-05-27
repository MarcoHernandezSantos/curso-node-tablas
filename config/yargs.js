const { option } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type : 'number',
        describe : 'es la base de la tabla de multiplicar',
        demandOption: true
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        describe: 'muestra la tabla en consola',
        default : false
    })
    .option('h',{
        alias : 'hasta',
        type : 'number',
        default : '10',
        describe : 'es el tope para la tabla de multiplicar'
        //demandOption : true
    })
    .check((argv, options) => {
        if( isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }
        if (isNaN(argv.h)){
            throw 'el tope tiene que ser un numero'
        }
        return true; 
    })
    
    .argv;


module.exports = argv;