import { useState,useEffect } from "react"

function Dashboard() {
    const [loading,setLoading] = useState(true)
    const [dashboardData,setDashboardData] = useState(null)



    useEffect(()=>{
        async function fetchData(){
            const res = await fetch('http://localhost:4000/dashboard')
            const data = await res.json()
            setDashboardData(data)
            setLoading(false)
        }
        fetchData()
    },[])


    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <>
            <h3>Dashboard</h3>
            <h2>likes - {dashboardData.likes}</h2>
            <h2>likes - {dashboardData.comments}</h2>
            <h2>likes - {dashboardData.reactions}</h2>

        </>
    )
}

export default Dashboard

