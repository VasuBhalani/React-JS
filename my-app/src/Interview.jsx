export const Interview = () =>{
    const students = [5];
    return(
        <div>
            <h1>Interview</h1>
            {/* <p>{ students.length && "Student not found"}</p> */}
            {/* <p>{ students.length===0 && "Student not found"}</p> */}
            {/* <p>{ !students.length && "Student not found"}</p> */}
            {/* <p>{ students.length && "Student not found"}</p> */}
            <p>No of Student : {students.length}</p>
        </div>
    )
}

/*
named export can multiple in same file {here must same name}
import { Interview } from './Interview';

default export is not allow to use {} 
import Interview from './Interview';

mix export  if in single file we have both default and named export
import Interview, { Header, Footer } from './Interview';

*/