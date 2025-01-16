import {readFile} from 'node:fs/promises'

(
    async () =>{
        console.log("leyendo el primer archivo...")
        const text = await readFile('./archivo.txt','utf-8')
        console.log('primer texto: ',text)
        console.log("--> Hacer cosas mientras lee el archivo")

        console.log("leyendo el segundo archivo...")
        const secondtext = await readFile('./archivo2.txt','utf-8')
        console.log('Segundo texto: ',secondtext)   
    }
)()
