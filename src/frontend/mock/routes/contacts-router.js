var express = require('express');
var router = express.Router();
var reqParamsGetter = require('../utilities/reqParamsGetter.js');

var _contacts = [
    {
      _id: '1',
      name: '张宇新',
      nameFirstWordChr: 'z',
      nameAllWordChr: 'zyx',
      mobilePhone:'13755555555',
      corp: 'coco',
      mail: 'zyx@coco.com'
    },
    {_id: '2', name: '可汗', nameFirstWordChr: 'k', nameAllWordChr: 'kh',mobilePhone:'13744444444', corp: '蒙古国皇室', mail: 'kehan@mg.com'},
    {_id: '3', name: '宽己敏', nameFirstWordChr: 'k', nameAllWordChr: 'khm',mobilePhone:'13711111111', corp: '大金', mail: 'kjm@dj.com'},
    {_id: '4', name: '阿房女', nameFirstWordChr: 'a', nameAllWordChr: 'epn',mobilePhone:'13733333333', corp: '大秦', mail: 'epn@dq.com'}
];

var _contactId = 5;
  

router.get('/data', function(req, res, next) {
  res.json(_contacts);
});

router.delete('/data', function(req, res, next) {
  var reqParams = reqParamsGetter.get(req);
  console.log('start to remove contact, params: %s', JSON.stringify(reqParams, null, 2));

  var contactId = reqParams.body.contactId;

  var findedIndex = -1;
  for(var i = 0; i < _contacts.length; i++) {
    if(_contacts[i]._id === contactId) {
      findedIndex = i;
      break;
    }
  }

  if(findedIndex >= 0) {

    var removedContact = _contacts.splice(i, 1);
    console.log('finded&removed: %s', removedContact);
    res.json({result: 'done', data: removedContact});
  } else {
    console.log('not remove, not finded');
    res.json({result: 'failed', err: new Error('can\'t find contact')});
  }
});

router.post('/data', function(req, res, next) {
  var reqParams = reqParamsGetter.get(req);
  console.log('start to add contact, params: %s', JSON.stringify(reqParams, null, 2));

  var contact = reqParams.body.contact;
  contact._id = _contactId++;

  _contacts.push(contact)
  res.json({result: 'success'});
  console.log('added success, all contacts:');
  console.log('%s', JSON.stringify(_contacts, null, 2));
});

router.put('/data', function(req, res, next) {
  var reqParams = reqParamsGetter.get(req);
  console.log('start to update contact, params: %s', JSON.stringify(reqParams, null, 2));

  var contact = reqParams.body.contact;

  var findedIndex = -1;
  for(var i = 0; i < _contacts.length; i++) {
    if(_contacts[i]._id === contact._id) {
      findedIndex = i;
      break;
    }
  }

  if(findedIndex >= 0) {
    _contacts[findedIndex] = contact;
    console.log('finded&updated: %s', JSON.stringify(contact, null, 2));
    res.json({result: 'done', data: contact});
  } else {
    console.log('not update, not finded');
    res.json({result: 'failed', err: new Error('can\'t find contact')});
  }
});

module.exports = router;