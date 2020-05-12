var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var dpContainer = document.getElementById('dptest');
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/profharimohanpandey/CW2/master/module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 1){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});

btn2.addEventListener("click", function(){
  var ourRequest2 = new XMLHttpRequest();
  ourRequest2.open('GET', 'https://raw.githubusercontent.com/profharimohanpandey/CW2/master/module-'+ pageCounter2 +'.json');
  ourRequest2.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData2 = JSON.parse(ourRequest2.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData2);
  };
  ourRequest2.send();
pageCounter2++;
if (pageCounter2 > 1){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});


function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Course + " is a " + data[i].Name + " module and has assessments "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += ', with Learning Outcomes ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += ', and volumes of ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }

    htmlString += ', with weightings of ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += '. <button id="editModule"><a href="editmodule.html">Edit this Module</a></button><button onclick="deleteAlert();">Delete Module</button></p>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}

function renderHTML2(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Name + " module and has assessments "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += ', with Learning Outcomes ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += ', with weightings of ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += '. </p>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}

function passwordCheck() {
   var confirmPassword = "academic";
   var adminPassword = "admin"
   var password = document.getElementById("loginPass").value;
   if (password == confirmPassword) {
        window.location="index.html";
   }
   else if (password == adminPassword){
     window.location="adminindex.html";
   }
     else {
       alert("Incorrect password.");
   }
}

function deleteAlert() {
  alert("Deleted.");
}
