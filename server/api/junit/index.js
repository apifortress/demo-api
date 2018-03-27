const router = require('express').Router()


router.get('/load/hook/123', function(req, res) {
    res.json({'companyId':1,'projectId':1,'identifier':"123"});
   });
   
router.get('/load/downloader/123', function(req, res) {
    res.json({'id':"123",'name':"foobar","location":"udine","apikey":"123","secret":"123","url":"http://aaa:8819/api","lastResort":true});
});
   
router.get('/load/schedules', function(req, res) {
    res.json([{'id':"123","testId":"123","projectId":1,"companyId":1}]);
});
   
router.get('/load/vault', function(req, res) {
    res.json({'variables':{'a':{'value':'123'}},'snippets':{'a':{'code':'123'}}});
});
   
router.get('/load/test/123', function(req, res) {
    res.json({'id':'123','input':'abc','unit':'abc','name':'gino'});
});
   
router.put('/store/metrics', function(req, res) {
    res.status(201).send();
});

router.put('/store/event', function(req, res) {
    res.status(201).send();
});

router.put('/store/source', function(req, res) {
    res.status(201).send();
});

module.exports = router