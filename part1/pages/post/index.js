import Link from "next/link"

function Posts({post}){
    return(
        <>
        <h3>Post List</h3>
        {
            post.map((val,ind)=>{
                return(
                    <div key={ind}>
                        <Link href={`/post/${val.id}`}>
                        <p>{val.title}</p>
                        </Link>
                    <hr/>
                </div>
                )
               
            })
        }
        </>
    )
}

export default Posts

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props:{
            post:data
        }
    }
}