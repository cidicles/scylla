import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainMenu.css';
import { Link } from 'react-router';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { changeLanguage } from '../../../Actions/Index';
import { breakSmall } from '../../../const';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      menuClass: ''
    };
  }
  setLang(event) {
    this.props.dispatch(changeLanguage(event.target.value));
  }
  toggleLogo(){
    this.toggleMainMenu();
  }
  toggleMainMenu(requestor){
    let {menuClass} = this.state;
    if(window.innerWidth <= breakSmall){
      if(menuClass === 'active'){
        this.setState({
          menuClass: ''
        });
      } else {
        this.setState({
          menuClass: 'active'
        });
      }
    } else {
      switch(requestor){
        case 'logo':
          this.context.router.push('/');
          break;
        default:
      }
    }
  }
  getNavItem(index, nav){
    switch (nav.type){
      case 'internal':
        return(
          <li key={`navigation-${ index }`}>
            <Link to={ nav.href } activeClassName="active" onClick={() => this.toggleMainMenu('link')}>
              { nav.display }
            </Link>
          </li>
        );
      case 'external':
        return(
          <li key={`navigation-${ index }`}>
            <a href={ nav.href } target='_blank' rel='noopener noreferrer'>
              { nav.display }
            </a>
          </li>
        );
      default:
        console.error('Nav items must specify type.');
    }

  }
  render() {
    let {menuClass} = this.state;
    return (
      <header className={menuClass}>
        <div className='wrap'>
          <nav className='mainmenu'>
            <div className="toggle-menu" onClick={() => this.toggleMainMenu('logo')}>
              <svg width="24" height="24" viewBox="0 0 24 24" alt={lang.toggleMenu}>
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
              </svg>
            </div>
            <div className='wrap-logo'>
              <div className='logo'>
                <a onClick={() => this.toggleMainMenu('logo')} className="tt">
                  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 76.76 20.89"><path d="M14.58,3.6a1.07,1.07,0,0,0-.08-.35.52.52,0,0,0-.05-.11.83.83,0,0,0-1.19-.26L3.2,9.12a.79.79,0,0,0-.44.74.78.78,0,0,0,.4.72l8.94,5.55L3.15,21.68a.84.84,0,0,0-.39.53.74.74,0,0,0,0,.16.9.9,0,0,0,.16.49.83.83,0,0,0,.71.38.76.76,0,0,0,.48-.15L14.2,16.83a.74.74,0,0,0,.3-.35,1.27,1.27,0,0,0,.08-.4.5.5,0,0,0-.06-.24.82.82,0,0,0-.36-.43L5.25,9.86l8.94-5.54A.88.88,0,0,0,14.58,3.6Z" transform="translate(-2.74 -2.35)"/><path d="M28.31,3.21a.84.84,0,0,0-.25-.61.87.87,0,0,0-1.21,0l-9.46,9.46a.85.85,0,0,0,0,1.22L26.8,22.7a.78.78,0,0,0,.64.31.86.86,0,0,0,.62-.25.85.85,0,0,0,0-1.22l-8.87-8.85,8.87-8.87A.84.84,0,0,0,28.31,3.21Z" transform="translate(-2.74 -2.35)"/><path d="M43.09,2.6A.82.82,0,0,0,41.93,3L38.6,9.3V8a.85.85,0,1,0-1.69,0V9.22L33.63,3a.78.78,0,0,0-.51-.46.9.9,0,0,0-.6,0,.78.78,0,0,0-.47.53.93.93,0,0,0,0,.24,1,1,0,0,0,.09.4l4.79,9.12V22a.85.85,0,0,0,1.69,0V13L43.47,3.7a.92.92,0,0,0,.07-.34,1,1,0,0,0,0-.26A.75.75,0,0,0,43.09,2.6Z" transform="translate(-2.74 -2.35)"/><path d="M53.18,17.73a.88.88,0,0,0-.67.23l-2.58,2.27v-17a.8.8,0,0,0-.85-.85.81.81,0,0,0-.87.85V22.1h0a.92.92,0,0,0,0,.17.83.83,0,0,0,.2.43h0a.9.9,0,0,0,.65.28.92.92,0,0,0,.69-.36l3.86-3.38a.82.82,0,0,0,.32-.56.75.75,0,0,0,0-.08.9.9,0,0,0-.22-.57A.82.82,0,0,0,53.18,17.73Z" transform="translate(-2.74 -2.35)"/><path d="M64.12,17.73a.88.88,0,0,0-.67.23l-2.58,2.27v-17A.8.8,0,0,0,60,2.43a.81.81,0,0,0-.87.85V22.1h0a.92.92,0,0,0,0,.16.84.84,0,0,0,.2.43h0A.9.9,0,0,0,60,23a.92.92,0,0,0,.69-.36l3.86-3.37a.79.79,0,0,0,.33-.64.9.9,0,0,0-.22-.57A.82.82,0,0,0,64.12,17.73Z" transform="translate(-2.74 -2.35)"/><path d="M79.46,21.9,74.65,3a.85.85,0,0,0-.82-.62A.8.8,0,0,0,73,3L71.23,9.95a.78.78,0,0,0-.07.28l-3,11.68a1,1,0,0,0,0,.23.82.82,0,0,0,.64.79h0A.67.67,0,0,0,69,23a.8.8,0,0,0,.83-.64L72,13.78l2.19,8.57A.83.83,0,0,0,75,23a.68.68,0,0,0,.23,0h0a.82.82,0,0,0,.64-.79,1,1,0,0,0,0-.24l-3-11.57.93-3.63,4,15.66a.82.82,0,0,0,1.08.57.85.85,0,0,0,.54-.42.77.77,0,0,0,.09-.35A.79.79,0,0,0,79.46,21.9Z" transform="translate(-2.74 -2.35)"/></svg>
                </a>
              </div>
            </div>
            <ul className='a-left'>
              {lang.navigation.mainmenu.map((nav, index) => (
                this.getNavItem(index, nav)
              ))}
            </ul>
          </nav>
          <nav className='locmenu'>
            <ul>
              <li>
                <div className="language">
                  <select onChange={ this.setLang.bind(this) }>
                    <option value='en'>{ lang.chooseRegion }</option>
                    {lang.getAvailableLanguages().map((lang, index) => (
                      <option key={ index } value={ lang }>{ lang }</option>
                    ))}
                  </select>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
   return { lang: state.lang };
}

MainMenu.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MainMenu);
