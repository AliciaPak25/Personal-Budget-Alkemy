import Balance from "../components/Home/Balance";
import ListLastRecords from "../components/Home/ListOfRecords";

const Home = () => {
    return(
        <div className="home">
        <Balance />
        <ListLastRecords />
        View all movements
        </div>
    )
}
export default Home;