# SpaceX Mission Details site

# TECH STACK
1. React js 
2. Rudux 
3. Thunk as a middle ware
4. react-ssr-boilerplate
5. axios
6. webpack
7. Sass
8. Express 

# Code Structure
1. ./scss- For styling
    ./scss/ocmponent - for component specific style sheets
    ./scss/pages - for page specific style sheets
2. ./server- For express server 
3. ./src- for component and page creation and funtional implemention
4. ./src/action - contains redux actions for data fetching from api 
5. ./src/common- for commmon file or component used in the app
6. ./src/component- for component creation
7. ./src/constants - for app constants
8. ./src/reducers -contains redux reducers and state.
9. ./src/router - for router the app pages


# Approach

programsPage component will be the entry point for the app. after Initially server side rendering will be done for the landing page with response data, I have used react-router config for enabling the ReactDOM to fetch the api response and attach it to the intilal static page which will be rendered through the server.
For Api fetching axios is used inside the dispatcher with the help of redux-thunk.
For filtering, I am storing the state of the buttons whether clicked or not and after each event click calling fetchPrograms actions.
For Responsive styling I have  used mobile first approach and used the combination of flex and grid to style the page.


# Known Issue
@media query working fine when client side rendering is enabled, but for server side rendering higher viewport css is not getting displayed.

# Lighthouse Report
https://github.com/raturi1995/uploads/blob/master/spaceX-lighthouse-Report.PNG
