let {PythonShell} = require('python-shell');

let fs = require("fs")

let filePath = "../Attendence lists"

let options = {
  mode: 'text',
  //Path of your python executable
  pythonPath: 'C:\\Program Files\\Python36\\python.exe',
  pythonOptions: ['-u']
};

//Selecting Dom elements for chaging UI
let btn = document.querySelector(".middle button")
let home = document.querySelector(".home")
let preLoader = document.querySelector(".prompt-box")

//Added event Listener to particular event
btn.addEventListener("click" , ()=>{
  preLoader.style.display = "flex";
  home.style.display = "none";

  //Running my Py Script
  PythonShell.run('../face_recognition.py', options, function (err, results) {
    if (err) throw err;
    console.log(results)
  })
})

//Detect changes in Attendence Folder
fs.watch(filePath , (eventType , file)=>{
  preLoader.style.display = "none";
  home.style.display = "block";
})
