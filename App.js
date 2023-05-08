
//parcel is doing this for us -> known as HMR(Hot module reload)
import React from 'react';
import ReactDOM from "react-dom" 
// Just create a h1 element
//{} where you give attributes to your tag
const heading1 = React.createElement("h1",
    {
        id: "heading",
    },
    "Hello world from React");
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading1)


//  console.log(heading)its a Object so React.createElement is a Object
// Craete a Root where we do all dom Manupulation, 
// root is the place where all the react code will run
// Now we have to put the h1 into DOM

// const root = ReactDOM.createRoot(document.getElementById("root"));
// render will take this object make it h1 tag which broswer understand and put it in root
// root.render(heading1)

/*Lot of other packeges we need here to made aproduction ready app in React
npm-does not have full form . it manages packages . Standard repo for all the packages all packages are hoisted over here.
terminal->npm init -> provide details->package.json
so package.json is configuration for npm
packages also known as dependency, npm takes care of that like version in package.json
*/
//    -----------------------------------------
//  Bundler->Webpack use to bundle or compressed our code to make it production Ready
/*
create-react-app behind it uses webpack to bundle all code
How to get parcel(Bundler) in our app
npm i -D parcel //D for we want to install it as Dev Dependency
npx parcel index.html->hosted on localhost:1234 port
*/
/*
npm init-to generate package.json
package.json is configuration of npm,keeps track of all the versions of dependencies with
^(minor upgradation and ~ for major upgradation)
pacakage-lock.json - keeps track of exact version of dependencies
node-modules contaions code of dependencies each dependency has own package.json
*/
/*
Use parcel to ignite our app npx(execute) parcel index.html
npx->Execute and npm->install
*/


