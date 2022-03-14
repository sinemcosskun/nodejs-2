
const writeFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.writeFile(path,data),(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    })
}

const appendFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.writeFile(path,data),(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    })
}
const readFileAsync = async (path) => {
    return new Promise((resolve ,reject) => fs.readFile(path, {encoding: 'utf-8'},(err,data) =>{
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}

const text = "BIL 4 2 5"

writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
.then(() => readFileAsync(path.revolse(__dirname,"text.txt"))
.then(data => data.split(' ').lenght)
.then(count => writeFileAsync(path.resolve(__dirname,"count.txt"),)
 
//const fsPromise = require('fs/promises');
const fsPromise = require('fs').promises;

const fileRead = async () => {
    try{
        await fsPromise.writeFile(path.resolve(__dirname, "text.txt"))
    } catch (error) {

    }
}


