import "./write.css"

export default function Write() {
    return (
    <>
        <div className="write">
            <img className="writeimg" src="https://images.unsplash.com/photo-1667695011090-70f07a2bafee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8" alt="nature" />
         <form  className="writeform">
        <div className="writeformgroup">
            <label htmlFor="fileInput">
            <i className=" writeicon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}/>
            <input type="text" placeholder="Title" className="writeinput"  autoFocus={true}/>
        </div>
        <div className="writeformgroup">
            <textarea placeholder="Tell your story...." type="text" className="writeinput writetext"></textarea>
        </div>
        <button className="writesubmit">Publish</button>
         </form>
        </div>
    </>
    );
}