import './Event.css';

export const Event=()=>{
    
    function handleFormSubmit(e){
        console.log(e);
        console.log(e.target);
        console.log(e.type);
        // alert('Form submitted');
        };
    const handleSubmit = (user)=>{
        console.log(user);
        alert('Form submitted'+user);
    }

    return(
        <>
        <div className="maindiv"><div className="container">
        {/* this is named function */}
        <button onClick={handleFormSubmit}>Click</button>
        {/* <button onClick={handleFormSubmit()}>Click</button> dont do this */}
      
        {/* when need param use arrow */}
        <button onClick={() => handleSubmit('vasu')}>Params</button> 

        </div>
        </div>
        </>
    )
} 