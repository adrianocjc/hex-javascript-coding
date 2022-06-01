$(() => {
  $('#btn_translate').click(() => {
const url = 
'https://fourtonfish.com/hellosalut/?lang=' + $('#language_code').val();
 $.get(url, (msg) => {
   $('#hello').text(msg.hello);
 });
});

});
