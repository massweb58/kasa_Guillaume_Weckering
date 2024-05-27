function Banner({cover, title}) {
    return (
        <div className="banner">
            <img src={cover} className="banner-img" alt="Banner"/>
            <h1 className="banner-title">{title}</h1>
        </div>
    )
}

export default Banner