$(() => {
  $('#btn_translate').click(() => sayHello());
  $('#language_code').keypress((event) => {
    if (event.which === 13) {
      sayHello();
      return false;
    }
  });
});

const sayHello = () => {
const url = 
'https://fourtonfish.com/hellosalut/?lang=' + $('#language_code').val();
 $.get(url, (msg) => {
    $('#hello').text(msg.hello)
 });
}
