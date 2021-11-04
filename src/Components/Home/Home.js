import About from "./About";
import Banner from "./Banner";
import CompaniesList from "./CompaniesList";

const Home = (props) =>{
    return <section>
        <Banner isLoggedIn={props.isLoggedIn}/>
        <About/>
        <CompaniesList/>
    </section>
}

export default Home