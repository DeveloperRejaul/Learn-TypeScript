import Component1 from "./Component1";

export default function Index() {
    return (
        <div>
            <Component1 count={1} disabled message="hello" status="success" />
        </div>
    );
}
