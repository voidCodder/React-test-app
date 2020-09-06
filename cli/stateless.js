const fs = require('fs');
const path = require('path');

module.exports = (componentName) => {

    const componentCode = `import './${componentName}.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default function(props) {
    return (
        <div className="${componentName}"></div>
    )
}`;
    fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
        componentCode,
    )
};