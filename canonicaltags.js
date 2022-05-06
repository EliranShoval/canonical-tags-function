//Copy this function with script tags - <script></script>
//Feel free to try it! good luck :)
function setCanonicalTag(){

  var automaticCanonicals = window.document.location.href;
  var canonicalsTags = document.getElementsByTagName('head')[0];
  var setCanoni = document.createElement('link');
  setCanoni.setAttribute('rel','canonical');
  setCanoni.setAttribute('href', automaticCanonicals);
  canonicalsTags.appendChild(setCanoni);
}
 setCanonicalTag();
