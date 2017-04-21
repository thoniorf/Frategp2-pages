document.addEventListener("DOMContentLoaded", function(event) {

  console.log("DOMLoaded");
  var anchors = document.getElementsByTagName('a');
  for(var i =0; i < anchors.length; i++){
    anchors[i].addEventListener("click", function(event){
      event.preventDefault();
      var anchor_target = document.getElementById(this.getAttribute("href").substring(1));

      if(anchor_target !== ""){
        var target_scrollY = anchor_target.offsetTop;
console.log(target_scrollY);
        var tId = setInterval(function () {
          var step = window.pageYOffset + 10;
          console.log(step);
          window.scroll(0,step);
          if(step >= target_scrollY){
            clearInterval(tId);
          }
        },1);
      }

    });
  }

});
