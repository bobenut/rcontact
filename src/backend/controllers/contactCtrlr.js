var Promise = require('bluebird');
var contactMdl = require("../models/contactMdl.js");

var contactCtrlr = {};

contactCtrlr.save = function (reqParams) {
    var name = reqParams.body.contact.name;
    var nameFirstWordChr = reqParams.body.contact.nameFirstWordChr;
    var nameAllWordChr = reqParams.body.contact.nameAllWordChr;
    var corp = reqParams.body.contact.corp;
    var mobilePhone = reqParams.body.contact.mobilePhone;
    var mail = reqParams.body.contact.mail;
    var dateNow = new Date();
    var createAt = dateNow;
    var lastModify = dateNow;

    return new Promise(function (resolve, reject) {
        contactMdl.save({
            name: name,
            nameFirstWordChr: nameFirstWordChr,
            nameAllWordChr: nameAllWordChr,
            corp: corp,
            mail: mail,
            mobilePhone: mobilePhone,
            dateNow: dateNow,
            createAt: createAt,
            lastModify: lastModify
        }).then(function (data) {
            resolve({result: 'done', data: data});
        }).catch(function (err) {
            reject({result: 'failed', err: err});
        });
    });
};

contactCtrlr.clear = function () {
    return new Promise(function (resolve, reject) {
        contactMdl.clear().then(function (data) {
            resolve({result: 'done', data: data});
        }).catch(function (err) {
            reject({result: 'failed', err: err});
        });
    });
};

contactCtrlr.findContacts = function (reqParams) {
    reqParams = reqParams || {};
    reqParams.body = reqParams.body || {};
    reqParams.query = reqParams.query || {};
    var filter = reqParams.query.filter || reqParams.body.filter || {};
    var fields = reqParams.query.fields || reqParams.body.fields || {};
    var sort = reqParams.query.sort || reqParams.body.sort || {};

    return new Promise(function (resolve, reject) {
        contactMdl.findContacts(filter, fields, sort).then(function (data) {
            resolve({result: 'done', data: data});
        }).catch(function (err) {
            reject({result: 'failed', err: err});
        });
    });
};

contactCtrlr.removeOne = function (reqParams) {
    var contactId = reqParams.body.contactId;
    var filter = {_id: contactId};

    return new Promise(function (resolve, reject) {
        contactMdl.removeOne(filter).then(function (data) {
            resolve({result: 'done', data: data});
        }).catch(function (err) {
            reject({result: 'failed', err: err});
        });
    });
};

contactCtrlr.updateOne = function (reqParams) {
    var dateNow = new Date();
    var filter = {
        _id: reqParams.body.contact._id
    };

    var value = {
        name: reqParams.body.contact.name,
        nameFirstWordChr: reqParams.body.contact.nameFirstWordChr,
        nameAllWordChr: reqParams.body.contact.nameAllWordChr,
        corp: reqParams.body.contact.corp,
        mobilePhone: reqParams.body.contact.mobilePhone,
        mail: reqParams.body.contact.mail,
        lastModify: dateNow
    };

    return new Promise(function (resolve, reject) {
        contactMdl.updateOne(filter, value).then(function (data) {
            console.log('update ok')
            resolve({result: 'done', data: data});
        }).catch(function (err) {
            console.log('update err: %s', err.message)            
            reject({result: 'failed', err: err});;[[]]
        });
    });
};

module.exports = contactCtrlr;
