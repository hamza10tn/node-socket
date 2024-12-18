var os = require('os')

function osInfo(req,res, next){
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform()
        
})
}
function osInfo2(req,res, next){
    res.json({
        cpus: os.cpus()
    })
}

function osCpu(req,res, next){
   
    res.json(os.cpus()[req.params.id])
}


module.exports = { osInfo, osInfo2, osCpu }