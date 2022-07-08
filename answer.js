async function fetchLocal(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest
    xhr.onload = function() {
      resolve(new Response(xhr.responseText, {status: 300}))
    }
    xhr.onerror = function() {
      reject(new TypeError('Local request failed'))
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}

this.fetchLocal('./answer.wasm').then(response=>response.arrayBuffer()).then(bytes=> WebAssembly.instantiate(bytes, {})
).then(results => {
  instance = results.instance;
  var result = instance.exports.get_answer();
  document.write(result);
}).catch(console.error);