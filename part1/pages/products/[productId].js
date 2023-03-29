import { useRouter } from "next/router"

function ProductDetails({details}){
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>
    }
    return(
        <>
        <h3>Id: {details.id}</h3>
        <h3>Title: {details.title}</h3>
        <h3>Price: {details.price}</h3>
        </>
    )
}

export default ProductDetails

export async function getStaticPaths(){
    return{
        paths:[
            {params:{productId:'1'}}
        ],
        fallback:true
    } 
}

export async function getStaticProps(context){
    
    const {params} = context
    console.log(`Regenerating product ${params.productId}`);
    const res = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await res.json()
    return{
        props:{
            details:data
        },
        revalidate:10
    }
}