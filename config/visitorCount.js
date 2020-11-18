const express = require('express');
const mongoose = require('mongoose');
const siteViews = require('../models/counter');

siteViewsUp = function () {
    siteViews.findByIdAndUpdate('768t868t76f85t7', {$inc: {counter: 1}}, {new:true})
    .then((data)=>{console.log(data.counter)})
    .catch((err)=>{console.log(err)});
} 

module.exports = {siteViewsUp};