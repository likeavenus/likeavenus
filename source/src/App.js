import React, { Component } from 'react';
import Home from "./components/Home/Home";
import './App.css';
import {Link, Route, Router} from "react-router-dom";
import Skills from "./components/Skills/Skills";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
const routes = {};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  showMenu = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  changePage = () => {
    this.setState({
      menu: !this.state.menu
    });
  };




  render() {

    let openMenu = null;
    if (this.state.menu) {
      openMenu = "menu_button active";
    } else {
      openMenu = "menu_button";
    }
    return (
      <div className="App">
        <Router history={history}>
          <div className="app_wrap">
            <button onClick={this.showMenu} type="button" className={openMenu}></button>
            <ul className="menu_list">
              <li className="menu_item">
                <Link onClick={this.changePage} className="home_link_arrow" to="/likeavenus">Главная</Link>
              </li>
              <li className="menu_item">
                 <Link onClick={this.changePage} className="home_link_arrow" to="/skills">Подробнее о скилах</Link>
              </li>
              <li className="menu_item">
                <Link onClick={this.changePage} className="home_link_arrow" to="/about">Обо мне</Link>
              </li>

              <li className="menu_item">
                <Link className="home_link_arrow" to="/contacts">Контакты</Link>
              </li>
            </ul>

            <Route exact path="/likeavenus" component={Home}/>
            <Route path="/skills" component={Skills}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
