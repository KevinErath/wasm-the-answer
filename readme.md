# How-to call WebAssembly-function from JavaScript

This is a sample on how to write a basic function with WebAssembly Text Format and call it from JavaScript.

To build this application, you should use `wat2wasm` from the WebAssembly Binary Toolkit (WABT) found here https://github.com/WebAssembly/wabt

## Compiling

To build the WebAssembly, you can call:

	wat2wasm.exe answer.wat

## Running the WebAssembly

Normally, the WebAssembly is hosted inside a Webpage which is served from a web server. For local testing, CORS will get in our way, which must be disabled for the browser. This can be done for chrome by adding a startup parameter as following:

	"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files file:///<PATH_WHERE_HTML_IS>/answer.html
	
**Note:** `<PATH_WHERE_HTML_IS>` has to be replaced with the full path


More details can be found in the following blog posting at https://pep-digital.de/blog/hallo-welt-als-webassembly