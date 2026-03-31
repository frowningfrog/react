function Post({favoriteColor, username, body}) {
    return (
        <div style={{border: `1px solid ${favoriteColor}`}}>
            <h3>{username}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post;