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
    const languages = this.props.languages;
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
