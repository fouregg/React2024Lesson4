import React from 'react';
const HelloWorld = () => {
    function sayHello(){
        alert('Hello, World!');
    }
    
    return(
        <button onClick={sayHello}>Click</button>
    );
};

export default HelloWorld;