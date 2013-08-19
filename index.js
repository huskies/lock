module.exports = lock;
function lock(avgs,options,locals,exec){
    
    // break default exec.
    exec(false);
    
    // init and set locals.lock data.
    if(!locals.lock){
        locals.lock = {
            reqs:[]   // request's arguments repository
           ,running:false
        }
    }
    
    var reqs = locals.lock.reqs;
    var avgsClone = avgs.concat([]);
    reqs.push(avgsClone)
    
    if(!locals.lock.running) {
        locals.lock.running = true;
        run()
    }

    function run(){

        var req = reqs.shift();
        
        var callback = req.pop();

        function cb(){
            var args =  arguments;
            callback.apply(null,args);	
            if(reqs.length > 0){
                run();
            }else{
                locals.lock.running = false;
            }

        }
        
        req.push(cb);
     
        exec(req);

    }
    
}