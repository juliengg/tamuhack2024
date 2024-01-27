import logo from "./logo.svg";
import graph from "./graph.png";
import './sidebar.css';

export default function Sidebar(){
    
    const imgStyle={
        height:"90px",
        margin: "50px 0 40px 0",
    }
    return(
        <div className="sidebar">
            <img src={logo} style={imgStyle} alt="" />
            <Button1/>
            <Button2/>
            <Button3/>

        </div>
    )
}

function Button1(){

    return(
        <div className="button">
            <img src={graph} alt="" />
        </div>
    )
}

function Button2(){

    return(
        <div className="button">
            <img src={graph} alt="" />
        </div>
    )
}

function Button3(){

    return(
        <div className="button">
            <img src={graph} alt="" />
        </div>
    )
}