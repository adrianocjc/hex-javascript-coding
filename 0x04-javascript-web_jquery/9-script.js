$.get('https://fourtonfish.com/hellosalut/?lang=fr', (msg) => {
  $('#hello').text(msg.hello);
});
