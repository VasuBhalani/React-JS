export const EventHandlerasProps =()=>{
    const handleOnClick = (user)=>{
        console.log(`clicked by ${user}`);
    }
    const handleMouseEnter = ()=>{
        console.log(`mouse entered`);
    }
    return(
        <>
        <Welcome onClick={()=>handleOnClick('vasu')} onMouseEnter={handleMouseEnter}></Welcome>
        </>
   );   
}

const Welcome = (props)=>{
    return(
        <>
        <h1 onClick={props.onClick} onMouseEnter={props.onMouseEnter}>Welcome</h1>
        </>
    );
}