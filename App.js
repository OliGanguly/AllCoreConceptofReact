// Here we Write all my React code

    // Just create a h1 element
    //{} where you give attributes to your tag
    const heading = React.createElement("h1",
    {
    id:"heading",
    },
    "Hello world from React");
    //  console.log(heading)its a Object so React.createElement is a Object
    // Craete a Root where we do all dom Manupulation, 
    // root is the place where all the react code will run
    // Now we have to put the h1 into DOM

    const root=ReactDOM.createRoot(document.getElementById("root"));
    // render will take this object make it h1 tag which broswer understand and put it in root
    root.render(heading)

    /*
    
    <div>
    <div>
    <h1>Oli</h1>
    </div>
    </div>
    */
