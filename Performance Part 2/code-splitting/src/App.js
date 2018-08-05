import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';

import AsyncComponent from './components/AsyncComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    //No code splitting
    this.setState({ route });

    //with code splitting
    // if (route === 'page1') {
    //   this.setState({ route });
    // }

    // if (route === 'page2') {
    //   //it works in async way (it returns a promise)
    //   import('./components/Page2').then((Page2) => {
    //     //use default becase Page2 uses export default
    //     this.setState({ route: route, component: Page2.default });
    //   });
    // }

    // if (route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({ route: route, component: Page3.default });
    //   });
    // }
  }

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    }

    if (this.state.route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    }

    if (this.state.route === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
    }

    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // }
    // else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }
  }
}

export default App;
