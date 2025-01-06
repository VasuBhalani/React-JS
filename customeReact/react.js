const root = document.getElementById('root');
const ele = document.createElement('h1');
ele.innerHTML = 'Hello Bro code';
ele.style = 'position: absolute;color:Black;background:yellow;';
root.appendChild(ele);

const reactElement = {
    type : 'a',
    // properties
    props : {
      href : 'https://courses.chaicode.com',
      target : '_blank',     
    //   style : 'color:black;'  
    },
    children : 'Click me' 
}

// Think about  ReacDOM.render()

function renderMethod(reactElement,root)
{
    //without loop
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // root.appendChild(domElement);

    // good code using loop 
    const domElement = document.createElement(reactElement.type);
    for(const i in reactElement.props)
    {
        // console.log(i,reactElement.props[i])
        domElement.setAttribute(i,reactElement.props[i]);
    }
    domElement.innerHTML = reactElement.children;
    root.appendChild(domElement)

}

renderMethod(reactElement,root);

