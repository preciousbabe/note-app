import "./post.css"

export default function post() {
    return (
    <div className="post">
       <img  className="postimg" src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtaWxpbmclMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&h=560" alt="" />
    <div className="postinfo">
        <div className="postcategory">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
        </div>
        <span className="postitle">My Selfie Moment</span>
        <hr/>
        <span className="postdate">1 hour ago</span>
    </div>
    <div className="postdesc">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, alias? Vero laborum repellendus ducimus ratione quaerat. Voluptatem officiis, consequuntur ducimus ipsa incidunt similique doloremque sint molestiae mollitia accusamus fuga consectetur dicta earum tempore minima possimus corrupti? Natus quaerat vel doloremque assumenda illum accusantium ipsa quasi dolore sequi ratione veniam cupiditate quos, cum vero ut distinctio ab eveniet adipisci optio laboriosam sunt a. Dolore numquam eaque ullam!</p>
    </div>
    </div>
    );
}