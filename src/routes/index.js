const express = require('express');

const usersRouter = require('./users');

//Funcion inicializadora
const routerApi = (app) =>{
    app.use('/', usersRouter);
};

module.exports = routerApi;