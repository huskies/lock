lock
=====

Lock method according to options, is huskies framework's middle.

Install
=======

npm install huskies-lock

Example
=======

if no use huskies-lock.
```javascript

function test(name,time,cb){
    setTimeout(function(){
        cb(name + "-leo");
    },time);
}

// for call wrap
for(var i=0;i<10;i++){
    test("name"+i,1000-i*10,function(n){
        console.log(n)
    })
}
```
##### Result
```
name9-leo
name8-leo
name7-leo
name6-leo
name5-leo
name4-leo
name3-leo
name2-leo
name1-leo
name0-leo
```
***
if use huskies-lock.
```javascript
var hus = require("huskies"),
    lock = require("huskies-lock");
    
function test(name,time,cb){
    setTimeout(function(){
        cb(name + "-leo");
    },time);
}

var wrap = hus(test).use(lock);

// for call wrap
for(var i=0;i<10;i++){
    wrap("name"+i,1000-i*10,function(n){
        console.log(n)
    })
}
```
##### Result
```
name0-leo
name1-leo
name2-leo
name3-leo
name4-leo
name5-leo
name6-leo
name7-leo
name8-leo
name9-leo
```
License
=======
MIT
