var globalAnimationID;
var globalAnchorParent;
var globalTargetScrollY;
var globalAnimationStep;
var globalDocumentEnd;
document.addEventListener("DOMContentLoaded", function(event) {
  var main = document.getElementsByTagName('main');
  globalAnchorParent = main[0];
  var anchors = document.getElementsByTagName('a');
  for(var i =0; i < anchors.length; i++){
    anchors[i].addEventListener("click", function(event){
      event.preventDefault();
      var anchor_target = document.getElementById(this.getAttribute("href").substring(1));
      if(anchor_target !== ""){
        globalDocumentEnd = window.pageYOffset + window.innerHeight >= globalAnchorParent.clientHeight;
        globalTargetScrollY = anchor_target.offsetTop;
        globalAnimationStep = (globalTargetScrollY - window.pageYOffset) / 10;
        globalAnimationID = requestAnimationFrame(anchorScroll);
      }
    });
  }

});
window.addEventListener("load",function(){

});

function anchorScroll(){
      var documentEnd;
      var position = window.pageYOffset + globalAnimationStep;
      if(position > globalTargetScrollY){
        position = globalTargetScrollY;
      }
      window.scroll(0,position);
      if(position >= globalTargetScrollY || globalDocumentEnd){
        cancelAnimationFrame(globalAnimationID);
      } else {
        globalAnimationID = requestAnimationFrame(anchorScroll);
      }
}
