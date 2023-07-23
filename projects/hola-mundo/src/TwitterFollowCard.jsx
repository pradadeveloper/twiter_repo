export function TwitterFollowCard({children,userName,name,isFollowing}){

    const imageTw = ('./public/jfprada.jpeg')
    console.log(isFollowing);
    return(
    <article className='md-followCard'>
        <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar' 
                alt="El avatar de jfprada" 
                src={imageTw}></img>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span 
                className='tw-followCard-infoUserName'>
                    @{userName}
                </span>
            </div>
        </header>
        
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    )
}