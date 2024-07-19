import React from 'react';
import './App.css';
import HomeHeader from './screens/excellent School/components/HomeHeader';
// import Header from './s./components/Header';
// import Header from "./screens./component/Header"

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
