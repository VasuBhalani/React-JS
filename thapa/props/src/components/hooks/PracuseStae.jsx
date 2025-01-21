import { useState } from "react";

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
];

export const DerivedState = () => {
    const [user, setUser] = useState(users);

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {user.map((p1) => (
                    <li key={p1.name}>
                        {p1.name} - {p1.age} year old
                    </li>
                ))}
            </ul>
        </div>
    );
};
