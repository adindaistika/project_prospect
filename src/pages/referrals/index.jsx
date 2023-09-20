import { IconBell } from "@tabler/icons-react";

const Referrals = () => {
    return (
        <main>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-primary font text-lg">Referrals</h1>
                <div className="flex gap-3 items-center">
                    <p>Agust 23,2023 4.30 PM</p>
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
                </div>
            </header>
            </main>
    )
}
export default Referrals;