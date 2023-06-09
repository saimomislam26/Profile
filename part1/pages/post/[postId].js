function PostDetails({post}){

    return(
        <>
            <h1>{post.body}</h1>
        </>
    )
}

export default PostDetails

export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json()
    const paths = data.map(post=>{
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
    return{
        paths,
        fallback:false
    } 
}

export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
    return {
        props:{
            post:data
        }
    }
}