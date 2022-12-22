import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News =(props)=>{
    
    // articles=[
    //     {
    //       "source": { "id": "bbc-sport", "name": "BBC Sport" },
    //       "author": null,
    //       "title": "Not just a flair player: Quaresma's stand for Roma rights",
    //       "description": "Well known for his flair play on the football pitch, ex-Portugal winger Ricardo Quaresma is a leading voice in the Roma community.",
    //       "url": "http://www.bbc.co.uk/sport/football/62687226",
    //       "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14483/production/_126457038_quaresma_cp_getty.jpg",
    //       "publishedAt": "2022-08-30T23:37:22.2547609Z",
    //       "content": "Known for his flamboyant range on the pitch, Quaresma is a powerful influence off it too\r\nA mobile phone was a luxury that a young Ricardo Quaresma could not afford.\r\nIn May 2000 he was away in Israe… [+8563 chars]"
    //     },
    //     {
    //       "source": { "id": "usa-today", "name": "USA Today" },
    //       "author": null,
    //       "title": "How much college football history do you know? Take our quiz.",
    //       "description": "College football has had many traditions blossom and countless records broken since the first game in 1869. Test how much you know about the sport's history with our quiz.",
    //       "url": "https://www.usatoday.com/storytelling/quiz/featured-news-quizzes/college-football-trivia/",
    //       "urlToImage": "https://www.gannett-cdn.com/-mm-/4f3533993b7e9db116f547261081e38605b1c8ad/c=0-91-3000-1779/local/-/media/2017/09/06/USATODAY/usatsports/ncaa_football__michigan_at_ohio_state_86992526.jpg",
    //       "publishedAt": "2022-08-30T22:27:10+00:00",
    //       "content": "Joe Maiorana-USA TODAY Sports\r\nCollege football has had several traditions blossom and records broken since the first game in 1869. Test how much you know about the sport's history with our quiz.\r\nPl… [+177 chars]"
    //     },
    //     {
    //       "source": { "id": "espn", "name": "ESPN" },
    //       "author": null,
    //       "title": "Jackson State Tigers football coach Deion Sanders -- We are 'in crisis mode,' as water emergency worsens",
    //       "description": "Jackson State coach Deion Sanders on Tuesday said in an Instagram video that his program and players are now \"in crisis mode\" when it comes to grappling with the multiple water problems that have afflicted Mississippi's capital city in the past week.",
    //       "url": "http://espn.go.com/college-football/story/_/id/34490077/jackson-state-tigers-football-coach-deion-sanders-crisis-mode-water-emergency-worsens",
    //       "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0519%2Fr1014946_1296x729_16%2D9.jpg",
    //       "publishedAt": "2022-08-30T22:02:00Z",
    //       "content": "Jackson State football coach Deion Sanders on Tuesday said in an Instagram video that his program and players are now \"in crisis mode\" when it comes to grappling with the multiple water problems that… [+2626 chars]"
    //     },
    //     {
    //       "source": { "id": "usa-today", "name": "USA Today" },
    //       "author": null,
    //       "title": "Water crisis forces Deion Sanders' Jackson State team to leave campus before FAMU game",
    //       "description": "Water crisis has created an emergency for the Jackson State football team before the Tigers' opener against Florida A&M this weekend.",
    //       "url": "https://www.usatoday.com/story/sports/ncaaf/2022/08/30/mississippi-flood-jackson-state-football-famu-deion-sanders/7942205001/",
    //       "urlToImage": "https://www.gannett-cdn.com/presto/2022/08/06/PJAM/e3fc9c06-8831-4883-9de5-f680e8ce90b5-TCL__HAT_Deion_Sanders_07.jpg?auto=webp&crop=2999,1687,x0,y75&format=pjpg&width=1200",
    //       "publishedAt": "2022-08-30T21:11:36+00:00",
    //       "content": "JACKSON, Mississippi – The water crisis in Jackson has affected the Jackson State football team.\r\nThe emergency has changed the way coach Deion Sanders has had to prepare for the Tigers' game against… [+2572 chars]"
    //     },
    //     {
    //       "source": { "id": "google-news-uk", "name": "Google News (UK)" },
    //       "author": "Barney Davis",
    //       "title": "Notting Hill Carnival: Rapper and father-to-be Takayo Nembhard named as stabbing victim",
    //       "description": "Footballer turned drill artist, who used the moniker TKorStretch, was stabbed underneath the Westway on Monday night",
    //       "url": "https://www.standard.co.uk/news/crime/takayo-nembhard-tkorstretch-notting-hill-carnival-stabbing-murder-b1021727.html",
    //       "urlToImage": "https://static.standard.co.uk/2022/08/30/10/nottinghillGV300822.jpg?width=1200&width=1200&auto=webp&quality=75",
    //       "publishedAt": "2022-08-30T20:25:21+00:00",
    //       "content": "Police are hunting the killers of a rapper and expectant father who was stabbed to death at the Notting Hill Carnival.\r\nTakayo Nembhard, 21, was knifed under the Westway flyover close to Ladbroke Gro… [+7909 chars]"
    //     },
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //       "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //       "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //       "publishedAt": "2020-04-27T07:20:43Z",
    //       "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    //     }
    //   ]
    const firstcapitalize=(str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    let s=false;
    document.title=`NowNews-${firstcapitalize(props.category)}`;
    
    const updateNews=async ()=>{
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${!s? props.category: ""}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&q=${!s? "":window.location.pathname.substring(1, window.location.pathname.length)}`;
        setLoading(true);
        let data= await fetch(url);
        props.setProgress(40);
        let parsedData= await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        setPage(page);
        updateNews();
        // eslint-disable-next-line
    }, [])
    //eslint-disable -next-line to remove warning ( kept in comments)
    

    // componentDidMount() {
    //     fetch(
    //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=6f9cf5e6b9684bd3a6a8117e35feb1c9"
    //     )
    //       .then(res => res.json())
    //       .then(data => data.articles)
    //       .then(articles => {
    //         setState({ articles });
    //       });
    //   }
    const handlePreviousClick= ()=>{
        updateNews();
        setPage(page-1);
    }
    const handleNextClick= ()=>{
        if(page+1> Math.ceil(totalResults/props.pageSize)){console.log("hey");}
        else{
            updateNews();
            setPage(page+1);
        }
    }
 
    return (
    <>
        <div className='container my-5'> 
            {loading && <Spinner/>}
            <div className='row my-5'>  
                
                {!loading && articles.map((element)=>{
                    return (
                        <div className='col-md-6 col-lg-4 col-sm-12 col-12' key={element.url}>
                        <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} when={element.publishedAt} source={element.source.name}/>
                    </div> )
                })}
                 {/* map function should have a unique key with each element  */}
            </div>       
        </div>
        <div className='mb-5 container d-flex justify-content-between'>
            <button disabled={page<=1} className='btn btn-dark' onClick={handlePreviousClick} style={{backgroundColor: "#7700e0", border: "1px solid #7700e0"}}> &larr; Previous</button>
            <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} className='btn btn-dark' onClick={handleNextClick} style={{backgroundColor: "#7700e0", border: "1px solid #7700e0"}}>Next &rarr;</button> 
            {/* to call function in class use function() */}
        </div>
    </>
    )
  }
    News.defaultProps={
    country: "in",
    category: "general",
    search: ""
    }
    News.propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

export default News