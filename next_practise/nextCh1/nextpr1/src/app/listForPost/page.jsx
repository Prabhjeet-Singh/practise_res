const getPostData=async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json;
}

export default async function listForPost(){
    const data= await getPostData();
    return(
        <>
        {data.map((data)=>{
            return (<span key={data.id}>{data.title}</span>)
            })}
        </>
    )
}