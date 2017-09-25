import React   from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import CommentApp from '../src/comment/CommentApp.js'




ReactDOM.render(
    <CommentApp />, 
    document.getElementById('root'));
registerServiceWorker();
