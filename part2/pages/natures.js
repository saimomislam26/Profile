import Image from "next/image"
import img from '../public/6.jpg'
function NaturesPage(){
    return(
        <div>
            <Image src={img} placeholder='blur' width='280' height='420' />
            {
                ['2','3','4','5'].map(path=>{
                    return(
                        <div >
                            <Image src={`/${path}.jpeg`} width='280' height='420' />
                        </div>
                        
                    )
                })
            }

        </div>
    )

}

export default NaturesPage