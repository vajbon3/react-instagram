import {useUser} from "../Context/UserContext";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {searchUsers} from "../Services/UserService";

export default function UserSearch() {
    const {users} = useUser();
    const [results, setResults] = useState(users);
    const [showResults, setShowResults] = useState(false);

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length < 3) {
            setResults(users);
            return;
        }
        setResults(searchUsers(value));
    }
    return (
        <div>
            <div className={"flex items-center input md:w-[300px] sm:w-[200px]"} style={{paddingTop:0, paddingBottom: 0}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="gray" className="size-6 top-2 left-1">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
                <input onInput={search} onFocus={() => setShowResults(true)}
                       onBlur={() => setTimeout(() => setShowResults(false), 200)}
                       className="w-full" type="text" placeholder="Search"
                />
            </div>
            {showResults && <div className="relative">
                <ul className="bg-secondary rounded-lg absolute top-[10px] md:w-[300px] w-[200px]">
                    {results.map((user, index) => (
                        <Link key={user.id} to={`/profile/${user.username}`}>
                            <li
                                className={`flex items-center gap-2 p-4 hover:bg-primary hover:cursor-pointer ${index === 0 ? 'rounded-t-md' : index === results.length - 1 ? 'rounded-b-md' : 'rounded-md'}`}>
                                <img src={user.avatar} alt={user.username} className="rounded-full w-8 h-8"/>
                                {user.username}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>}
        </div>
    );
}