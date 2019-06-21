//start the Javascript
function toggleProjects(){
  var projectList = document.getElementById("projectList");
  if(projectList.style.display == 'none'){
//The block statment allows you to use multiple statements where JavaScript expects only one statement.
    projectList.style.display = 'block'
  }
  else{
    projectList.style.display = 'none'
  }
}

function toggleTech(){
  var techList = document.getElementById("techList");
  if(techList.style.display == 'none'){
    techList.style.display = 'block'
  }
  else{
    techList.style.display = 'none'
  }
}
