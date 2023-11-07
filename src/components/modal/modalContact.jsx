import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { postContact } from '../../../store/reducers/contact/contact.action';
import { useState } from 'react';
import { Swallalert } from '../../../helper/helper';


export default function ModalContact(){
    const [busy, set_busy] = useState(false);
    
    
    const schema = yup.object({
        first_name: yup.string().required("required"),
        last_name: yup.string().required("required"),
        phone_number: yup.string().required("required"),
        home_number: yup.string().required("required"),
        work_number: yup.string().required("required"),
        email: yup.string().required("required"),
        category_id: yup.string().required("required"),
    })
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            await set_busy(true);
            if (!id) {
                await dispatch(postContact(data))
            }
            await set_busy(false);
        }
        catch (e) {
            await set_busy(false);
            if (e.response?.data) {
                Swallalert('error-form', Object.values(e.response.data.errors)[0])
            } else {
                Swallalert('error', e.response);
            }
        }

    }
    return (
        <>
            <dialog id="modalcontact" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Add Contact</h3>
                    <form className="mt-5 ">
                        <div className="grid grid-cols-2 gap-3 ">
                            <label className="flex my-2 flex-col gap-1 text-xs w-full">
                                <span className="text-xs font-bold text-black">First Name</span>
                                <input
                                    className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                                    type="text"
                                    required
                                    placeholder="Your First Name"
                                    name="first_name"
                                    id="first_name"
                                    {...register('first_name')}
                                />
                                <p className='text-red-500'>{errors.first_name?.message}</p>
                            </label>
                            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                                <span className="text-xs font-bold text-black">Last Name</span>
                                <input
                                    className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                                    type="text"
                                    required
                                    placeholder="Your Last Name"
                                    name="last_name"
                                    id="last_name"
                                    {...register('last_name')}
                                />
                                <p className='text-red-500'>{errors.last_name?.message}</p>
                            </label>
                        </div>
                        <label className="flex my-2 flex-col gap-1 text-xs w-full">
                            <span className="text-xs font-bold text-black">Phone Number</span>
                            <input
                                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                                type="text"
                                required
                                placeholder="Your Phone Number"
                                name="phone_number"
                                id="phone_number"
                                {...register('phone_number')}
                            />
                            <p className='text-red-500'>{errors.phone_number?.message}</p>
                        </label>
                        <label className="flex my-2 flex-col gap-1 text-xs w-full">
                            <span className="text-xs font-bold text-black">Home phone number</span>
                            <input
                                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                                type="text"
                                required
                                placeholder="Your Home Number"
                                name="home_number"
                                id="home_number"
                                {...register('home_number')}
                            />
                            <p className='text-red-500'>{errors.home_number?.message}</p>
                        </label>
                        <label className="flex my-2 flex-col gap-1 text-xs w-full">
                            <span className="text-xs font-bold text-black">Work phone number</span>
                            <input
                                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                                type="text"
                                required
                                placeholder="Your Work  Number"
                                name="work_number"
                                id="work_number"
                                {...register('work_number')}
                            />
                            <p className='text-red-500'>{errors.work_number?.message}</p>
                        </label>
                        <label className="flex my-2 flex-col gap-1 text-xs w-full">
                            <span className="text-xs font-bold text-black">Email</span>
                            <input
                                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                                type="email"
                                required
                                placeholder="Your Email"
                                name="email"
                                id="email"
                                {...register('email')}
                            />
                            <p className='text-red-500'>{errors.email?.message}</p>
                        </label>
                        <label className="flex flex-col w-full" htmlFor="category_id">
                            <span className="font-bold text-xs text-black">Category</span>
                            <select
                                className="bg-white-700 text-xs text-black border border-slate-300 p-2 rounded-md outline-none"
                                name="category_id"
                                id="category_id"
                                {...register('category_id')}
                            >
                                <option className="text-black text-xs" value="prospects">prospects</option>
                                <option className="text-black text-xs" value="team">team</option>
                                <option className="text-black text-xs" value="client">client</option>
                            </select>
                            <p className='text-red-500'>{errors.category_id?.message}</p>
                        </label>
                        <button
                            className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                        >
                            Add Contact
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

