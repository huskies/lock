var huskies = require("huskies"),
    lock = require("huskies-lock");
    
function test(name,time,cb){
    setTimeout(function(){
        cb(name + "-leo");
    },time);
}

var wrap = huskies(test).use(lock);

for(var i=0;i<10;i++){
    wrap("name"+i,1000-i*10,function(n){
        console.log(n)
    })
}

/*
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

*/