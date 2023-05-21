type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    names: string[];
    status: "waiting" | "success";
    obj: {
        id: string;
        title: string;
    };
    objArr: {
        id: string;
        title: string;
    }[]; // array of object
    // onClick: () => void;
    // onChange: (id: number) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    onSomething: Function;
    optional?: {};
    setState: React.Dispatch<React.SetStateAction<number>>;
};

// combine many type
type app1 = {
    num: number;
};
type app2 = {
    name: string;
};
type myTypes = app1 &
    app2 &
    AppProps & {
        additionalProp: boolean;
    };

export declare interface AppPropsType {
    children?: React.ReactNode; // best, accepts everything React can render
    childrenElement: JSX.Element; // A single React element
    style?: React.CSSProperties; // to pass through style props
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

export default function Component1({
    message,
    count,
    disabled,
    status,
}: // myTypes
AppProps) {
    return (
        <div>
            <h1>{message}</h1>
            <h1>{count}</h1>
            <h1>{disabled}</h1>
            <h1>{status}</h1>
        </div>
    );
}

// 3 type of use case in functional component
// const App = ({ message }: AppProps) => <div>{message}</div>;
// const App = ({ message }: { message: string }) => <div>{message}</div>;
// const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
