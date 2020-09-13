# Hands-on Express XSS Reflected

## Set up

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

````
<script>alert("test")</script>
````

````
<script>alert(document.cookie)</script>
````


## Fix

Try to fix vulnerability and prevent XSS Attacks
