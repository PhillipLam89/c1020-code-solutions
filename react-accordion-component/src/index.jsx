import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';
const languages = [
  {
    key: 'html',
    name: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web'
  },
  {
    key: 'css',
    name: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript'
  },
  {
    key: 'js',
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming languages that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first class functions'
  }
];

ReactDOM.render(
  <Accordion languages={languages}/>,
  document.getElementById('root')
);
