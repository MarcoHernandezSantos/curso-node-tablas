
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) =>{
    try{ 
        let salida= '';
        let consola ='' ;
       


        for(let i=1; i<=hasta; i++){
        salida += `${base} ${'x'.green} ${i} ${'='.bgBlue} ${base * i}\n`;
        consola += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log(colors.inverse('================='));
            console.log(colors.inverse(`tabla del ${base}`));
            console.log(colors.inverse('================='));
            console.log(salida);
        }
        // fs.writeFile( `tabla-${base}.txt`,salida,(err) =>{
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);    
        // });
        
        

        fs.writeFileSync( `./salida/tabla-${base}.txt`,consola);

        return `tabla-${base}.txt `;

    }catch(error){
        throw error;
    }
}




module.exports = {
//   crearArchivo : crearArchivo
   crearArchivo //es lo mismo que lo de arriba 
}


// const crearArchivo = async ( base ) =>{
    
//     return new Promise ( (resolve, reject) => {

//         let salida ='';
//         console.log('=================');
//         console.log(`tabla del ${base}`);
//         console.log('=================');
        

//         for(let i=1; i<=10; i++){
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
        
//         console.log(salida);  
            
//         fs.writeFileSync( `tabla-${base}.txt`,salida);


//         resolve( `tabla-${base}.txt `);
//         reject(`Ha ocurrido un error con el archivo tabla-${base}.txt`);
//     })
// }





        // fs.writeFile( `tabla-${base}.txt`,salida,(err) =>{
            //     if(err) throw err;
            //     console.log(`tabla-${base}.txt creado`);    
            // });