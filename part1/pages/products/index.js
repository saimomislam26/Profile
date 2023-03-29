import Link from "next/link"

function Products({ product }) {
    return (
        <>
            {
                product.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <Link href={`/products/${val.id}`}>
                                <h3>{val.title}</h3>
                            </Link>

                            <p>{val.description}</p>
                        </div>

                    )
                })
            }
        </>
    )
}

export default Products

export async function getStaticProps() {
    console.log("Generating / Regenerating Product List");
    const res = await fetch('http://localhost:4000/products')
    const data = await res.json()

    return {
        props: {
            product: data
        },
        revalidate:20
    }
}