const root = document.getElementById('root');


const reactElement = {
    type : 'a',
    // properties
    props : {
      href : 'https://courses.chaicode.com',
      target : '_blank',     
      style : 'text-decoration-line:none; text-transform:capitalize; color:purple; font-size: 50px;'  
    },
    children : 'Chai aur code' 
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
    for(let i in reactElement.props)
    {
        domElement.setAttribute(i,reactElement.props[i]);
    }
    domElement.innerHTML = reactElement.children;
    root.appendChild(domElement)

}

renderMethod(reactElement,root);




/*
summery 
t-1:we are created our own react element & render method, react element(object) that contain type,props and children
      const obj = {
       type : '',
       props : {},
       children : ''
      }
      method
      renderMethod(obj,root)
      {
        //create element 
        // set properties
        // set children
        // append to root
      }
t-2: In vite project we are rendering App and it is function then we create similar function and render it ✅
     <MyApp> == MyApp() but not preferrable
     we can't render object like <Myobj> -> in this case MyObj is same as Our task-1 object 
     it not work because react render method have some special properties or rules that we need to follow
        so we can't render object like <MyObj> but we can render MyObj with jsx means direct MyObj=(<a href="http://google.com">Google</a>) something 
        because at the end it convert jsx in to tree and then render it simple by MyObj 
t-3 : then we are created custome ele but using react
      react.createElement(
      'type', // div , a , p , h1 ,
      {}, // props
        '',// children
        var  // evaluted expression 
      )  
in react we can access value as {var}                          





*/