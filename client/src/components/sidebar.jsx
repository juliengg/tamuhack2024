import logo from "../images/logo.svg"
import graph from "../images/graph.png"

export default function Sidebar(){
    const sidebarStyle = {
        minWidth:"125px",
        width:"15vw",
        maxWidth:"150px",
        height:"100vh",
        background: "linear-gradient(#363047, #1A1820)",
        display: "flex",
        flexDirection:"column",
        alignItems:"center"
    }
    const imgStyle={
        height:"90px",
        margin: "50px 0 40px 0"
    }
    return(
        <div style={sidebarStyle}>
            <img src={logo} style={imgStyle} alt="" />
            <Button1/>
            <Button2/>
            <Button3/>

        </div>
    )
}

const buttonStyle = {
    width:"60%",
    aspectRatio: '1/1',
    background: "linear-gradient(#5D5C62, #4C4663)",
    borderRadius:"10px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor:"pointer",
    margin:"0 0 30px 0"
}

function Button1(props){

    const imgStyle = {
        height:"40%"
    }

    return(
        <div style={buttonStyle}>
            <img src={graph} style={imgStyle} alt="" />
        </div>
    )
}

function Button2(props){

    const imgStyle = {
        height:"40%"
    }

    return(
        <div style={buttonStyle}>
            <img src={graph} style={imgStyle} alt="" />
        </div>
    )
}

function Button3(props){

    const imgStyle = {
        height:"40%"
    }

    return(
        <div style={buttonStyle}>
            <img src={graph} style={imgStyle} alt="" />
        </div>
    )
}