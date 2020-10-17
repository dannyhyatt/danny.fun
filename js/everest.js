window.onscroll = function() {
  // alert(( / 96));
  // document.getElementById('feet').innerText = +(Math.round(((document.documentElement.scrollTop / 96) % 12) + "e+2")  + "e-2");
  document.getElementById('feet').innerText = document.documentElement.scrollTop ;
}
