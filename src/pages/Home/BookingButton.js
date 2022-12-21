import React from 'react';
// import { useNavigate} from 'react-router-dom';


  function BookingButton() {
    // const navigate=useNavigate();

    // const nav =  () => {
    //  navigate('/BookingPage')
      
    // };
     
    return (
             <div className="Booking">
              
               <button  
               className="mx-72 my-20 bg-blue-500 hover:bg-blue-400 text-white 
               font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
                type="button" >
                  BOOK AN APPOINTMENT
                    
                </button> 
            </div>
        );
}

export default BookingButton;
