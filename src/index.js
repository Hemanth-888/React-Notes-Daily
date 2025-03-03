import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { TimeoutDemo } from './components/TimerEvents/timeout-demo';
import { IntervalDemo } from './components/sliders/Progress';
import { CarouselDemo } from './components/sliders/CarouselDemo';
import { ReactForm } from './components/Form/ReactForm-formik';
import { ReactForm1 } from './components/Form/form-demo';
import { StopWatch } from './components/TimerEvents/stopwatch';
import { TimeoutDemo1 } from './components/TimerEvents/Timeoutdemo';
import { CustomDemo } from './controlled-components/custom-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <CustomDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//pWatch or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
