import Headert from "../shared/Header/Headert";
import Leftside from "../shared/leaftside/leftside";
import Navbar from "../shared/navbar/Navbar";
import Rightside from "../shared/rightside/Rightside";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Headert></Headert>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1>This is home page</h1>

               <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                <div className="border">
                    <Leftside></Leftside>
                </div>
                <div className="border col-span-2"><h2>News Coming Soon</h2></div>
                <div className="border"><Rightside></Rightside></div>
                </div>

        </div>
    );
};

export default Home;