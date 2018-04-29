jQuery(document).ready(function(){

  jQuery('#mail-crypter-href').text(encrypt(jQuery('#mail-crypter-href').text()));

  jQuery('#mail-crypter-href').click(function(){
    event.preventDefault();
    var link = "mailto:" + encrypt(jQuery('#mail-crypter-href').attr('value'));
    console.log(link);
    window.location.href = link;
  });

  function encrypt(code){
    var out = "";
    for(var i = 0; i < code.length; i++){
      out += String.fromCharCode(code.charCodeAt(i)-2);
    }
    return out;
  }
});
