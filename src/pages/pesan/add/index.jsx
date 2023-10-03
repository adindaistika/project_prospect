
"use client";
import { IconX } from "@tabler/icons-react";
import { IconPhoto } from "@tabler/icons-react";
import { IconFileDescription } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";

const AddPesan = () => {
    const [file, setFile] = useState([]);

    const handleFile = (e) => {
        const files = e.target.files;
        setFile(files);
        for (let i = 0; i < files.length; i++) {
            const element = files[i];
            console.log("Ini element", element);
        }
        console.log(file);
    };
    return (
        <div>
            <div className="mb-4 sm:mb-0">
                <h1 className="text-black lg:text-left text-lg font-bold">ADD PESAN</h1>
            </div>
            <form className="my-3" action="">
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="p-3 rounded-md shadow-md outline-none w-full"
                    placeholder="Title"
                />
                <textarea
                    name="message"
                    id="message"
                    className="p-3 my-3 rounded-md shadow-md outline-none w-full"
                    placeholder="Message"
                    cols="30"
                    rows="5"
                ></textarea>
                <h3 className="font-bold mb-3">File</h3>
                <div className="w-full h-48 flex flex-col justify-center items-center rounded-md shadow-md">
                    <IconUpload />
                    <p className="opacity-60 text-center font-semibold mt-2">
                        Drag and drop file <br /> or
                    </p>
                    <label htmlFor="file">
                        <span className="text-primary font-semibold">Upload File</span>
                        <input
                            className="hidden"
                            onChange={handleFile}
                            type="file"
                            multiple
                            name="file"
                            id="file"
                        />
                    </label>
                </div>
                <div className="my-3 space-y-3">
                    {Object.values(file).map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center p-5 gap-3 rounded-md shadow-md"
                        >
                            {(item.name.split(".")[1] == "jpg" ||
                                item.name.split(".")[1] == "png" ||
                                item.name.split(".")[1] == "jpeg") && (
                                    <IconPhoto width={64} color="#0B588D" />
                                )}
                            {item.name.split(".")[1] == "doc" ||
                                (item.name.split(".")[1] == "docx" && (
                                    <IconFileDescription width={64} color="#0B588D" />
                                ))}
                            {item.name.split(".")[1] == "pdf" && (
                                <IconFileDescription width={64} color="#f29741" />
                            )}
                            <p className="font-semibold w-full">{item.name}</p>
                            <span className="w-full flex justify-end">
                                <IconX width={16} />
                            </span>
                        </div>
                    ))}
                </div>
                <button
                    className="px-3 py-2 rounded-md font-semibold bg-primary text-white"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddPesan;