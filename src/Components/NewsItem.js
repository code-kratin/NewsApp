import React from 'react'

const NewsItem =(props)=>{
    let {title, desc, imgurl, newsurl, author, when, source}= props  // use state when you have to change dynamically without page reload and when its constant    
    return (
        <>
            <div className="card my-4">
              <div style={{justifyContent: "center", left: '0px', position: 'absolute'}}>
                    <span className="badge p-2 bg-primary " style={{color: "white", zIndex: '1', fontSize: '0.8rem', borderRadius: '10%'}}>
                        {source}
                    </span>
              </div>
                    <img src={imgurl? imgurl: 'https://th.bing.com/th/id/R.71ac41672d75275f48e529c83ee23b8e?rik=yaQ5K5HEwVsedA&riu=http%3a%2f%2fimg1.wikia.nocookie.net%2f__cb20120327095232%2flogopedia%2fimages%2fa%2fa8%2fWorldnewsnow2011.jpg&ehk=7y0lgbg6eaNmBItkJWwOrHEcRG0FZJUlQk3HtfqguAU%3d&risl=&pid=ImgRaw&r=0'} className="card-img-top" alt="..." height={270}/>
                    <div className="card-body">
                        <h5 className="card-title">{title?title.slice(0,80):""} {title && title.length>80? "...": ""}</h5>
                        <p className="card-text">{desc?desc.slice(0,150):""} {desc && desc.length>150? "...": ""}</p>  
                        {/* As some desc nd title are null so to deal with them */}
                        <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {new Date(when).toGMTString()}</small></p>
                        <a href={newsurl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary" style={{backgroundColor: "#7700e0", border: "1px solid #7700e0"}}>Read More</a>
                    </div>
                </div>
        </>
    )
}
export default NewsItem