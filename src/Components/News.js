import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import PropTypes from 'react'

export default class news extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general',
    }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pagesize:PropTypes.number,
    //     category: PropTypes.string
    // }
     constructor(){
        super();
        this.state={
        articles: [],
        loading:false,
        page:1,
        }
    }
    
    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc23f745c17845438a55b9835e014fcf&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let paresedData= await data.json();
       this.setState({loading:false})
        this.setState({articles: paresedData.articles ,totalResults:paresedData.totalResults})
    }
    handleNextClick = async ()=>{
        console.log("Next");
        // ceil formula is for total pages req; total res/total articles
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)) ){    
            let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc23f745c17845438a55b9835e014fcf&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let paresedData= await data.json();
            this.setState({loading:false})
            this.setState({
                page:this.state.page+1,
                articles: paresedData.articles
            })
        }
    }
    handlePrevClick = async ()=>{
        console.log("Prev");
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc23f745c17845438a55b9835e014fcf&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let paresedData= await data.json();
        this.setState({loading:false})
        this.setState({
            page:this.state.page-1,
            articles: paresedData.articles
        })
    }
    render() {
    return (
      <div className="contanier my-3">
        <h1 className="text-center">News Top Headlines</h1>
        {this.state.loading && <Spinner/>}
         <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return<div className="col-md-4 "  key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt= {element.publishedAt} author={!element.author?"unknown":element.author}/>
                </div>
            })}
         </div>
         <div className="container d-flex justify-content-between"> 
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick} > &larr; Previous</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}
