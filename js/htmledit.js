function update()
{
var idoc = document.getElementById('iframe').contentWindow.document;

idoc.open();
idoc.write(editor.getValue());
idoc.close();
}

function setupEditor()
{
window.editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
editor.setValue(`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Test Me</h1>
<p>You can edit anything here!</p>

</body>
</html>`,1); //1 = moves cursor to end

editor.getSession().on('change', function() {
  update();
});

editor.focus();


editor.setOptions({
  fontSize: "13pt",
//   fontFamily: "Consolas",
  showLineNumbers: true,
  showGutter: true,
  vScrollBarAlwaysVisible:true,
  enableBasicAutocompletion: true, enableLiveAutocompletion: true
});

editor.setShowPrintMargin(false);
editor.setBehavioursEnabled(false);
}

setupEditor();
update();

function save(){
    var filename = document.getElementById("fileName").value;
    if (filename == ""){
        filename = "index"
    }
    var name = filename + ".html"
    console.log(name)
    var file = new File([editor.getValue()], name , {type: "text/html;charset=utf-8"});
    saveAs(file);
}
function reset(){
    var txt;
  if (confirm("Are you sure you want to reset?")) {
    editor.setValue(`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Test Me</h1>
<p>You can edit anything here!</p>

</body>
</html>`,1);
  } else {
  }
    
}

function theme(){
    var theme = document.getElementById("themeSelect").value; 
    // var themeName = "monokai";
    if (theme == "1"){
        var themeName = "monokai";
    }
    else if(theme == "2"){
        var themeName = "twilight"
    }
    else if(theme == "3"){
        var themeName = "cobalt"
    }
    else if(theme == "4"){
        var themeName = "textmate"
    }
    else if(theme == "5"){
        var themeName = "dracula"
    }
    else if(theme == "6"){
        var themeName = "chrome"
    }
    else if(theme == "7"){
        var  themeName = "github"
    }
    else if(theme == "8"){
        var  themeName = "dreamweaver"
    }
    else{}
    var themePath = "ace/theme/"+themeName;
    editor.setTheme(themePath);
}
