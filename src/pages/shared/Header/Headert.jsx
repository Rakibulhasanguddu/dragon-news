import moment from 'moment';
import logo  from "../../../assets/logo.png";
const Headert = () => {
    return (
        <div className='text-center mt-10'>
           <img className='mx-auto mb-4' src={logo} alt="" />
           <p className='text-2xl font-bold'>Journalism Without Fear or Favour</p>
           <p className='font-bold mt-4'>{moment().format("dddd, D MMMM  YYYY")}</p>
        </div>
    );
};

export default Headert;