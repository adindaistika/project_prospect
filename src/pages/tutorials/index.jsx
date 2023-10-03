
import { IconBell } from "@tabler/icons-react";

const Tutorials = () => {
    return (
        <main>
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left text-lg font-semibold">
                        TUTORIAL
                    </h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img
                        src="/static/auth/profile.jpeg"
                        className="w-[50px] m-auto"
                        alt="Logo"
                    />
                </div>
            </header>
            <div>
                <iframe
                    width="560"
                    height="315"
                    className="w-full rounded-lg mb-5"
                    src="https://www.youtube.com/embed/W1MlXE5fBLM?si=dYQyTvSauKz5lNeU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="collapse collapse-arrow shadow-md border bg-white text-black">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-semibold">Tutorial 1</div>
                <div className="collapse-content pt-3 border-t">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea
                        praesentium ratione illo hic doloribus dolorem sunt nostrum
                        necessitatibus est, eligendi nemo veniam corrupti ipsa atque magnam
                        sed perspiciatis nam fuga neque ex eveniet animi sint. Autem,
                        explicabo? Repellendus doloremque ratione esse sed unde corporis id
                        magni aut, harum suscipit?
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Tutorials;