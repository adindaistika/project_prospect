import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const ModalContact = () => {
    const schema = yup.object({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        phone_number: yup.string().required(),
        home_number: yup.string().required(),
        work_number: yup.string().required(),
        email: yup.string().required(),
        category_id: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        console.log(data)

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
                    <form className="mt-5 " onSubmit={handleSubmit(onSubmit)}>
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
                        </label>
                        <button
                            className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
                            type="submit"
                        >
                            Add Contact
                        </button>
                    </form>
                </div>
                <form method="dialog" class="modal-backdrop bg-[#0000004d]"><button>close</button></form>
            </dialog>
        </>
    );
};

export default ModalContact;
