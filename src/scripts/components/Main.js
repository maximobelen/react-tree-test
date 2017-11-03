require('styles/App.scss');

import React from 'react';
import Tree from 'react-tree-structure';
import testFile from './testFile.js';

class AppComponent extends React.Component {

    render() {
        var props = this.props;
        return (
            <div className="app">
               <Tree {...props}> </Tree>
            </div>
        );
    }
}

AppComponent.defaultProps = {
    node: testFile
};

export default AppComponent;
