
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOMLoaded");

  var main = document.getElementsByTagName('main');
  var anchors = document.getElementsByTagName('a');


  for(var i =0; i < anchors.length; i++){
    anchors[i].addEventListener("click", function(event){
      event.preventDefault();
      var anchor_target = document.getElementById(this.getAttribute("href").substring(1));
      anchorScroll(anchor_target,25,5,main[0]);
    });
  }

});

function anchorScroll(target,step,timestep,parent){
  if(target !== ""){
    var target_scrollY = target.offsetTop;
    var intervalID = setInterval(function () {
      var position = window.pageYOffset + step;
      window.scroll(0,position);
      var documentEnd = window.pageYOffset + window.innerHeight >= parent.clientHeight;
      if(position >= target_scrollY || documentEnd){
        clearInterval(intervalID);
      }
    },timestep);
  }
}
