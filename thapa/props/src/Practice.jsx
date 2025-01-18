export const Practices = () => {
    const students = [5];
    console.log(Boolean(students.length));
    console.log(students.length);
    return (
      <>
        <p>{students.length && "No students found"}</p> 
        <p>Number of students: {students.length}</p> 
      </>
    );
  };


/*
    <p>{students.length && "No students found"}</p>  // 
    <p>Number of students: {students.length}</p>
    ans: 
    0
    Number of students: 0
   
    If the first operand (students.length) is falsy (e.g., 0, null, undefined, false, ""), the result of the && operation is the first operand.
If the first operand is truthy, the result of the && operation is the second operand.
 
*/

