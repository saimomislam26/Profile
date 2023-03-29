import useSWR from 'swr'

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/dashboard')
    const data = await res.json()
    return data
}

function DashBoardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) return 'An Error Occured'
    if (!data) return 'Loading...'

    return (
        <>
            <h3>Dashboard</h3>
            <h2>likes - {data.likes}</h2>
            <h2>likes - {data.comments}</h2>
            <h2>likes - {data.reactions}</h2>

        </>
    )
}

export default DashBoardSWR