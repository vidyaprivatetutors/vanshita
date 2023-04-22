var express =require("express");

var router =express.Router();

router.get('/', (req, res)=> {
   res.send("Get Request for Products");
});

module.exports = router;