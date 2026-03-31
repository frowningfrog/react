export default function Header() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1>Social Fun</h1>
            <div style={{display: "flex", gap: "5px"}}>
                <p>Home</p>
                <p>Posts</p>
                <p>Settings</p>
            </div>
        </div>
    )
}