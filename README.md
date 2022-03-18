# React & Google Analytics

## 1. Create a base react project

  ``` 
- $ yarn create react-app my-projectName
  ``` 

## 2. Install Dependencies

  ``` 
- $yarn add react-ga4
  ``` 


## 3. Setup Google Analytics Inside Project

  ```
  //App.js 
   
  import ReactGA from 'react-ga4';
  const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ``` 

## 4. Implementation (we can add GA events as below)

``` 
//useAnalyticsEventTracker.jsx
  
import React from "react";
import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;

//GA-buttonTest.jsx
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const ContactUs = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  return(
 <div>
    <h3>Contact Us</h3>
     <div> 
       <a href="#" onClick={()=>gaEventTracker('call')}>Call Us</a>
      </div>
     <div>
       <a href="mailto:someone@example.com" onClick={()=>gaEventTracker('email')}>Write to us</a>
      </div>
  </div> 
  )
};

```


## 5. Run application 

```
$ yarn start
```


## 6. Check the real time events on Goodle Analytics!!



## Source: 
https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html
