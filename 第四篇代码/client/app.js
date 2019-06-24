import aaa from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx'

const root = document.getElementById('root')
const render = Component =>{
    aaa.hydrate(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    )
}
render(App)
if(module.hot){
    module.hot.accept('./App.jsx',()=>{
        const NextApp = require('./App.jsx').default
        render(NextApp)
    })
}