import Link from "next/link"

const { useState } = require("react")

function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment,setComment] = useState('')

    const fetchComment = async () => {
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
    }

    const submitComment = async ()=>{
        const res = await fetch('/api/comments',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json()
        setComments(data)
    }

    const deleteComment =async(id)=>{
        const res = await fetch(`/api/comments/${id}`,{
            method:'DELETE'
        })
        const data = await res.json()
        console.log(data);
        setComments(data)
    }

    return (
        <>
            <input type='text' onChange={e=>setComment(e.target.value)}/>
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComment}>Load Comment</button>
            {
                comments.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <Link href={`/comments/${val.id}`}>{val.id}
                            </Link> . {val.text}
                            <button onClick={()=> deleteComment(val.id)}>Delete Comment</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage