import {comments} from '../../data/comments'
function  Comment({comment}){
    return(
        <div>
            {comment.id}. {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticPaths(){

    // Do not call internal API
    
    // const res = await fetch('/api/comments')
    // const data = await res.json()
    // const paths = data.map((val)=>{
    //     return{
    //         params:{
    //             commentId: `${val.id}`
    //         }
    //     }
    // })
    return{
        paths:[
            {params:{commentId:'1'}},
            {params:{commentId:'2'}},
            {params:{commentId:'3'}}
        ],
        fallback:false
    } 
}

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params
    const comment = comments.find((comment)=> comment.id === parseInt(commentId))

    // Dont call own API
    // const res = await fetch(`/api/comments/${commentId}`)
    // const data = await res.json()

    return{
        props:{
            comment
        }
    }
}