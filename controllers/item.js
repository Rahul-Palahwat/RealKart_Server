const express = require('express');
const Items = require('../models/Item')

const getAllItems  =async (req,res) => {
    try {
    const items = await Items.find({});
    // console.log(items)
    res.json(items);
    // res.send('<h1>Hello from controller</h1>');
} catch (error) {
        console.log("Error from while fetching data",error.message);
}
}

module.exports = {getAllItems}