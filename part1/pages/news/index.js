function NewsList({ article }) {
    return (
        <>
            <h3>News List</h3>
            {
                article.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <h3>{val.title} | {val.category} | {val.description}</h3>
                        </div>
                    )

                })
            }
        </>
    )
}

export default NewsList


export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()

    console.log('Pre-Rendering News Article List');

    return {
        props: {
            article: data
        }
    }
}