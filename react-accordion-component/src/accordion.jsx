import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.getAttribute('id');
    this.state.view === id ? this.setState({ view: '' }) : this.setState({ view: id });
  }

  render() {
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

    return languages.map(language => {
      const updatedClass = this.state.view === language.key ? 'viewable' : 'hidden';
      return (
        <div className="container" key={language.key}>
          <h2 className="program-name" id={language.key} onClick={this.handleClick}>{language.name}</h2>
          <p className={updatedClass}>{language.description}</p>
        </div>
      );
    });

  }
}

export default Accordion;
