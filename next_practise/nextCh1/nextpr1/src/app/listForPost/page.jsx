const getPostData=async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}
const getUsers= async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();

}

export default async function listForPost(){
    const [data,usersData]= await Promise.all([getPostData(),getUsers()]);
    return(
        <>
        {data.map((data)=>{
            return (<p key={data.id}>{data.title}</p>)
            })
        }
        {usersData.map((data)=>{
            return (<p key={data.id}>{data.name}</p>)
            })
        }
        </>
    )
}