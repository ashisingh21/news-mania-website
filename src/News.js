import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Button from 'react-bootstrap/Button';
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";



function News(props) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState()
    const [totalResult, settotalResult] = useState(0)

    const toCharacterCase = (string) => {
        let newString = string.toUpperCase().slice(0, 1) + string.toLowerCase().slice(1);
        return newString;

    }

    const api = '5df3866589764ca7b9a505218e530c27';
    const updateNews = () => {


        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api}&page=${page}&pageSize=${props.pageSize}`).then((result) => {
            result.json().then((resp) => {
                setData(resp.articles);

                settotalResult(resp.totalResults);
                setPage(page + 1)
                console.log("total result", totalResult);
                console.log("total data length", data.length)
            })
        });

        document.title = `${toCharacterCase(props.category)} - News Mania`

    }

    useEffect(() => {
        updateNews()
    }, [])


    const fetchMoreData = () => {

        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api}&page=${page + 1}&pageSize=${props.pageSize}`).then((result) => {
            result.json().then((resp) => {

                setData(data.concat(resp.articles));
                settotalResult(resp.totalResults);
                setPage(page + 1);



            })
        })
    }

    return <>

        <h1 className="text-center top-heading">Top Headlines on {toCharacterCase(props.category)}</h1>
        {loading && <Spinner ></Spinner>}

        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={data.length + 6 !== totalResult}
            loader={<Spinner />}
        >
            <div className="container">
                <div className="row">
                    {data.map((element) =>
                        <div key={element.url} className="col-md-4"><NewsItem title={element.title.slice(0, 45)} description={element.description ? element.description.slice(0, 98) : "description of the news comes here"} imageUrl={element.urlToImage ? element.urlToImage : 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author ? element.author.slice(0, 15) : 'Unknown'} source={element.source.name} /></div>
                    )}       </div>
            </div>

        </InfiniteScroll>





        {/* <div className="container">
                <Button disabled={page <= 1} variant="dark" onClick={handlePreviousClick}>&laquo; Previous</Button>
                <Button disabled={Math.ceil(totalResult / (props.pageSize)) < (page + 1)} variant="dark" onClick={handleNextClick}>Next &raquo;</Button>
            </div> */}

    </>
}
export default News;