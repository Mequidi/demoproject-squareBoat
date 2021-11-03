import About from "./About";
import Banner from "./Banner";
import CompaniesList from "./CompaniesList";
import Background from "../Layout/Background"

const Home = () =>{
    return <section>
        <Background style={{height:"465px"}}/>
        <Banner/>
        <About/>
        <CompaniesList/>
    </section>
}

export default Home