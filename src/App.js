import React from 'react';
import './App.css';
import HomeHeader from './screens/excellent School/components/HomeHeader';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './assets/less/common.less';
import './assets/less/toggle.less';
import './assets/less/config.less';
import './assets/less/config.css';

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <HomeHeader />
      {/* <HomeSlider /> */}
      {/* <About />
      <Admissions />
      <Academics />
      <Hostels />
      <Contact /> */}
    </div>

    // <Suspense>
    //   <Switch>
    //     <Route path="/header" component={Header} />
    //     <Route path="/" component={HomeSlider} />
    //   </Switch >
    // </Suspense>
  );
}

export default App;
