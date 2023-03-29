import Link from "next/link"
import { useRouter } from "next/router"
function Home(){
  const router = useRouter()
  const handleClick=()=>{
    router.push('/product')
  }
  return(
  <div>
    <h1>Home Page</h1>
    <Link href='/blog'>
    Blog
    </Link>
    <Link href='/products'>
    Products
    </Link>
    <Link href='/post'>
    Posts
    </Link>
    <Link href='/news'>
    News
    </Link>
    <button onClick={handleClick}>Order</button>
  </div>
   )
}

export default Home