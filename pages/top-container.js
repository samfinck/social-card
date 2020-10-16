function TopContainer() {
    return(
        <div className="top-container">
            <div className="profile-container">
                <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" width="50px" height="50px"/>
            </div>
            <div className="userhan-container">
                <div className="username-container">
                {username}
                </div>
                <div className="handle-container">
                @{handle}
                </div>
            </div>
        </div>
    )
}

export default TopContainer