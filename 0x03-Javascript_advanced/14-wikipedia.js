function createElement(data) {
  let p = document.createElement("p");
  p.textContent = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  const req = new XMLHttpRequest();
  req.open(
    'GET', 
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  req.onreadystatechange = () => {
    if (req.readyState === req.DONE) {
      if ( req.status === 0 || 
        (req.status >= 200 && req.status < 400)
        ) {
        callback(req.responseText);
      } else {
        const err = new Error('Error');
        return callback(err, null);
      }
    }
  };
  req.send();
}

queryWikipedia(createElement);
