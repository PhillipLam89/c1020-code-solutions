import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false // menu starts off as closed
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() { this.setState({ menuIsOpen: !this.state.menuIsOpen }); }

  render() {

    if (!this.state.menuIsOpen) { // if menu is closed clicking it will open
      return <i className="fas fa-bars" onClick={this.toggleMenu}></i>;
    } else {
      const menuOptions = this.props.menuOptions.map(item => {
        return <p key={item.key} onClick={this.toggleMenu}>{item.value}</p>;
      });
      return (
        <div className="modal-container">
          <div className="menu-toggle">
            <h2>Menu:</h2>
            {menuOptions}
          </div>
          <div className="grey-side" onClick={this.toggleMenu}></div>
        </div>
      );
    }
  }
}

export default AppDrawer;
