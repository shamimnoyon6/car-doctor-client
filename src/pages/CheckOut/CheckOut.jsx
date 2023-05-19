import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id ,price ,img} = service;
    const {user} = useContext(AuthContext);

    const handleCheckOutService = event =>{
       event.preventDefault();

       const form = event.target;
       const name = form.name.value;
       const date = form.date.value;
       const email = user?.email;
       const checkOut = {
           customerName : name,
           email,
           img,
           date,
           service: title,
           service_id: _id,
           price: price


       }
       console.log(checkOut);
       
     fetch('http://localhost:5000/checkout',{
        method:'POST',
        header: {
             'content-type': 'application/json'
        },
        body:JSON.stringify(checkOut)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert('service book successfully')
        }
     })


    }

    return (
        <div>
            <h2 className="text-center text-3xl">check out: {title}</h2>


            <form onSubmit={handleCheckOutService}>
               
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name= "name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} placeholder="due amount" className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="order confirm" />
                    </div>
               
            </form>
        </div>

    );
};

export default CheckOut;