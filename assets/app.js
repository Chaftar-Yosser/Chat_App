/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
// import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import ReactDom from 'react-dom';
import App from "./js/components/App";
import store from "./js/store";
import {Provider} from 'react-redux';
import { MemoryRouter } from "react-router-dom";



ReactDom.render(
    (
        <Provider store={store}>
            {/*MemoryRouter :  t5alii url men fouk yok3ed nasfouu  */}
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        </Provider>

    ),
    document.querySelector('#app')
)
// start the Stimulus application

