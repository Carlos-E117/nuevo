const fs = require("node:fs")

fs.readdir('.',(err,files)=>{
    if(err){
        console.error('Errror al leer eldirectorio',err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})