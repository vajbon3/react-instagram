import UserSearch from "./UserSearch";
import {Link} from "react-router-dom";
import {Modal} from "./Modal";
import { useRef } from "react";

export default function Navbar() {
    const loginModalRef = useRef<HTMLDialogElement>(null);
    const openLoginModal = () => loginModalRef.current?.showModal();

    return (
        <header>
            <nav
                className={"z-10 bg-secondary border-b-primary border-b-4 p-4 fixed text-text top-0 w-full flex gap-4 justify-around items-center"}>

                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link to="/" className={"flex items-center gap-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="lightblue" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/>
                        </svg>
                        Photo Depot
                    </Link>
                </h1>

                {/* Search bar */}
                <UserSearch/>

                {/* Login button */}
                <button onClick={openLoginModal} className="btn-fill p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"/>
                    </svg>
                </button>
            </nav>

            {/* Login Modal */}
            <Modal ref={loginModalRef}>
                <div className="p-4 bg-secondary rounded-xl max-w-[300px]">
                    {/* Google, Facebook authentication buttons */}
                    <div className="flex flex-col gap-4 justify-center">
                        <button className={"flex items-center gap-4"}>
                            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="" className={"size-6"}/>
                            <span>Login With Google</span>
                        </button>

                        <button className={"flex items-center gap-4"}>
                            <img src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" alt="" className={"size-6"}/>
                            <span>Login With Facebook</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </header>
    );
}