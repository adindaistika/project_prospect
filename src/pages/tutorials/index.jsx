import { IconBell } from "@tabler/icons-react";

const Tutorials = () => {
    return (
        <main>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-primary font text-lg">Tutorial</h1>
                <div className="flex gap-3 items-center">
                    <p>Agust 23,2023 4.30 PM</p>
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
                </div>
            </header>
            <div>
            <iframe width="560" height="315" className="w-full mb-5" src="https://www.youtube.com/embed/W1MlXE5fBLM?si=dYQyTvSauKz5lNeU" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </main>
    )
}

export default Tutorials;