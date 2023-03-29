import Head from "next/head"
import Footer from "@/components/Footer"

function About() {
    return (
        <>
        <Head>
            <title>About Saimom</title>
            <meta name='description'/>
        </Head>
            <div className="content">
                About
            </div>
        </>

    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}