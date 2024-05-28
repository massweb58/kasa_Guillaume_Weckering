function Profile({name, picture}) {
    let [firstName, lastName] = name.split(' ');
    return (
        <div className="host-wrapper">
            <div className="host-name">
                {firstName} <br/> {lastName}
            </div>
            <img className="host-picture" src={picture} alt="Host"/>
        </div>
    )
}

export default Profile