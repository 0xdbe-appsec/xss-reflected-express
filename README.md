# Hands-on Express XSS Reflected

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

* Having fun with XSS attacks such as:

````
<script>alert("test")</script>
````

* Try to fix vulnerability
