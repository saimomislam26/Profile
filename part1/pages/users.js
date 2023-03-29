import User from "../components/user"

function userList({users}){
    return(
        <>
        <h1>User List</h1>
        {
            users.map((user,ind)=>{
                return(
                    <div key={ind}>
                        <User user={user}/>
                    </div>
                )
            })
        }
        </>
    )
}
export default userList

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return{
        props:{
            users:data
        }
    }
}