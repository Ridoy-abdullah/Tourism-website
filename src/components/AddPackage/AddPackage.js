import React from 'react';
import './AddPackage.css'
import { useForm } from "react-hook-form";
// import useFirebase from '../../hook/useFirebase';


const AddPackage = () => {
    // const { user } = useFirebase();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        //data.email = user?.email;
        fetch('https://sheltered-dawn-30026.herokuapp.com/addPackage', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('added successfully');
                    reset();
                }
            });
        console.log(data);
    }


    return (
        <div className="m-2">
            <h1 className="text-center text-dark package-title pt-5"> Add Tour Package</h1>
            <div className="login-box w-25 m-auto m-5">
                <div className="package-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("packajeName", { required: true })}
                                placeholder="Package Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="add" className="btn btn-dark w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;