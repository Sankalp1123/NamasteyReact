const parent =React.createElement("div",{id:"parent"},
[
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an H1 tag"),
React.createElement("h2",{},"I am an H2 tag")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am an H1 tag"),
React.createElement("h2",{},"I am an H2 tag")])
]);



console.log(parent); //this will return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// render method will basically to take this object and put it up and convert it into that heading tag and put it on the DOM
