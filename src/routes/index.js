import React, { Component } from 'react';
const { default: Test } = require("../containers/Test/Test");

export const routes = [
    {
        name: 'Test',
        path: '/test',
        component: Test,
        isPrivate: false,
        exact: true
    },
];
