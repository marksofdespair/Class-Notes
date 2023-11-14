//Header.js in src
//OR import { Component }  from 'react';
//export default class Header extends Component

/*
inserting in the header of the app.js file:
*/

import React, { Component } from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h3>Garden Planning Tool</h3>
            </header>
        )
    }

}

//Main.js in src
?*
const Main = () => {
    return {
        <main>
            <div>
                <h4>Available Plants</h4>
                <p>Plants Will be listed here</p>
            </div>
        </main>
    }
}


