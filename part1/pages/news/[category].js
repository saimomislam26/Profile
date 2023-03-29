function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h3>Showing News For {category}</h3>
            <hr />
            {
                articles.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <h3>{val.title} | {val.description}</h3>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const { params, req, res } = context
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie',['jwtoken=token'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`Pre-Rendering News Article List for category ${category}`);
    
    return {
        props: {
            articles: data,
            category
        }
    }
}
