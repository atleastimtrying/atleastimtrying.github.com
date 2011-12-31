var afTools = {
  focus: function(element){
    element.className = 'appear';
  },
  blur: function(element){
    if(element.className = 'appear'){
      element.className = '';
    }
  },
  getTag: function(string, arrayPos){
    if(!arrayPos){
      arrayPos = 0;
    }
    return document.getElementsByTagName(string)[arrayPos];
  }
}

var appearOnEvent = function(event){
  var elements = document.getElementsByClassName('appear');
  for(var i = 0; i < elements.length; i++){
    elements[i].className = '';
  }
  afTools.focus(event.currentTarget);
}

window.onload = function(){
  afTools.getTag('body').className = 'show';
  
  var sections = document.getElementsByTagName('section');
  for(var i = 0; i < sections.length; i++){
    sections[i].onclick = appearOnEvent;
  }
  afTools.getTag('header').onclick = appearOnEvent;
}