import { FaFacebookF,FaInstagram,FaTwitter, FaGoogle,FaGithub  } from "react-icons/fa";
import q1 from "../../../assets/qZone1.png"
import q2 from "../../../assets/qZone2.png"
import q3 from "../../../assets/qZone3.png"
const Rightside = () => {
    return (
        <div>
           <div className="gap-4">

           <h1 className="text-2xl font-bold p-3 text-center">Login With</h1>
           <button className="btn btn-outline w-full mt-3 mb-3 "><FaGoogle />Login With Google</button>
           <button className="btn btn-outline w-full mb-4 "> <FaGithub />Login With Github</button>
           </div>

           <div >
            
           <h1 className="text-2xl font-bold p-3 text-center">Find on Us</h1>
           <button className="btn btn-outline w-full mt-3 mb-3 "> <a className="flex gap-2" href=""><FaFacebookF />Facebook</a></button>
           <button className="btn btn-outline w-full mb-4 "><a className="flex gap-2" href=""> <FaInstagram />Instragram</a></button>
           <button className="btn btn-outline w-full mb-4 "><a className="flex gap-2" href=""><FaTwitter />Twitter</a></button>
           </div>
       

           <div  className="ml-10">
            
            <h1 className="text-2xl font-bold p-3 text-center">Q-Zone</h1>
            <img src={q1} alt="" />
            <img src={q2} alt="" />
            <img src={q3} alt="" />
          
            </div>


        </div>
    );
};

export default Rightside;