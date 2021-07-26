import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import  Sdata from './Sdata';
// console.log(Sdata[0].sname);



ReactDOM.render(
<>

<h1 className="heading_style">List of Top 6 Netflix Series in 2021</h1>

{Sdata.map((value,index) =>{
    console.log(index);
    return(<Card 
        sname  =  {value.sname}
        imgsrc =  {value.imgsrc} 
        title  =  {value.title}
        link   =  {value.link}
        
        />) 
})}


</>,
document.getElementById("root")
);


