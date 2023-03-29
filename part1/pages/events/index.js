import { useRouter } from 'next/router'
import {useState} from 'react'

function EventList({ eventList }) {
    const [filteredData,setFilteredData] = useState(eventList)
    const router = useRouter()

    const filter =async()=>{
        const res = await fetch(`http://localhost:4000/events?category=Sports`)
        const data = await res.json()
        setFilteredData(data)
        router.push('/events?category=Sports',undefined,{shallow:true})
    }
    const allData =async()=>{
        const res = await fetch(`http://localhost:4000/events`)
        const data = await res.json()
        setFilteredData(data)
        router.push('/events',undefined,{shallow:true})
    }

    return (
        <>
            <h4>Filtered By Event</h4>
            <button onClick={filter}>Sports</button>
            <button onClick={allData}>All</button>
            <h3>Event List</h3>
            <hr />
            {
                filteredData.map((val, ind) => {
                    return (
                        <div key={val.id}>
                            <h4>{val.id} {val.title} {val.date} | {val.category}</h4>
                            <p>{val.description}</p>
                            <hr />
                        </div>
                    )

                })
            }
        </>
    )
}

export default EventList

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category? 'category=Sports' : ''

    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}