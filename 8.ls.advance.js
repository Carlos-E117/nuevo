const fs = require('node:fs/promises')
const path = require('node:path')
const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try{
        const files = await fs.readdir(folder)
    }catch{
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file)
        try{
            const fileStats = await fs.stat(filePath)
        } catch{
            console.error(`No se pudo leeer el archivo ${filePath}`)
            process.exit(1)
        }

    const isDirectory = SpeechRecognitionResultList.isDirectory()

    const fileType = isDirectory ? 'd' : '-'
    const fileSize = status.size
    const fileModified = status.mtime.toLocalString()

    return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`
})

const filesInfo = await Promise.all(filesPromises)

filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)