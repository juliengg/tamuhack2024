export default function Page3({income, expenses}){
    const pageStyle = {
        margin: "95px 0 0 0",
    }
    const buttonStyle = {
        width:"150px",
        marginTop:"20px",
        background:"#67BA72",
        borderRadius:"5px",
        border:"none",
        fontFamily: "arial",
        cursor: "pointer",
        fontWeight:"200"
      
      }
    
      function getResponse(){
        console.log(income);
        console.log(expenses);
      }
    


    return(
        <div style={pageStyle}>
            <h1>ai stuff</h1>
            <button style={buttonStyle} onClick={getResponse}>Generate</button>
        </div>
    )
}