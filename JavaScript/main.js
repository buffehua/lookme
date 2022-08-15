// 下方導覽

let loop;
            
function switchFavorite(){
  let location_icon = document.getElementById("location_icon");
  if(location_icon.title == "分點資訊"){
    location_icon.src="/Image/00_hover_location_icon.png";
    location_icon.title = "資訊";
  }else{
    location_icon.src="/Image/00_original_location_icon.png";
    location_icon.title = "分點資訊";
  }
  
}

function init(){
  //設定點按事件
  document.getElementById("location_icon").onclick = switchFavorite;
}//init
window.addEventListener("load", init, false);