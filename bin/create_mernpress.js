const {execSync} = require('child_process')
const path = require('path')
const fs = require('fs')

if(process.argv.length < 3){
    console.log("you have to provide name for your project")
    console.log("For Example")
    console.log("npx create-mernpress app-name")
    process.exit(1)
}

const projectName = process.argv[2];
const cPath = process.cwd()
const ProjectPath = path.join(cPath,ProjectPath)
const git_repo = "http://github.com/manlowtech/mernpress"

try{
    fs.mkdirSync(ProjectPath)
}catch(err){
    if(err.code == 'EEEXIST'){
        console.log("Provided name already exist")
    }
    process.exit(1)
}

async function main() {
    try{
      console.log("Downloading File ...")
      execSync(`git clone --depth=1 ${git_repo} ${ProjectPath}`)
      process.chdir(ProjectPath)
      console.log("Installing Dependencies")
      execSync('npm install')
      console.log("The Installation is done , npm start to use")
    }catch(err){
        console.log(err)
    }
}
main()
