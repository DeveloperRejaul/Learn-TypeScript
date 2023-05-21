import { useState } from "react";

type AppProps = {
    User: {
        id: string;
        name: string;
    }[];
    User2: {
        id: string;
        name: string;
    };
};

export default function UseState({ User, User2 }: AppProps) {
    const [state, setState] = useState(false); // default
    const [user, setUser] = useState<User | null>(null);
    const [user2, setUser2] = useState<User2>({} as User);

    return (
        <div>
            {User.map((element) => {
                return (
                    <>
                        <h1>{element.id}</h1>
                        <h1>{element.name}</h1>
                    </>
                );
            })}

            <h1>{}</h1>
        </div>
    );
}
