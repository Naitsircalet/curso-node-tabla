const colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

const fs = require ('fs');
const { argv } = require('process');

    const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {


        try {
            let salida = '';
            
            for (let i =0; i<=hasta ; i++ ) {
                salida +=( ` ${ base } x ${ i } = ${ base*i }\n` );
            }

            if ( listar ) {
                console.log('====================='.verbose);
                console.log(`  TABLA DEL ${base}`.underline.blue);
                console.log('====================='.verbose);
                
            
            console.log(salida.rainbow);
            }

            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
            
            return`tabla-${base}.txt creado`.red;
        } catch (err) {
            throw err
        }

    }
    module.exports = {
        crearArchivo
    }
