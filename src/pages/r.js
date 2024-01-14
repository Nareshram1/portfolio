 const r=({name})=>{
    return(
        <>
        <h3 className="flex align-middle">{name}</h3>
        </>
    )
 }

 export default r;

 export async function getServerSideProps(e){
    //  const data =await import("URL")

     return {
        props:{'name':"Naresh Ram"}
    
    }
 }
