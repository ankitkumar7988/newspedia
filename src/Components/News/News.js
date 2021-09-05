import React, { Component } from "react";
import Newsitem from "../Newsitem/Newsitem";
import { Loading } from "../Loading";
import "./style.scss";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Lloyd Burnard",
      title:
        "Proteas go down in opening Sri Lanka ODI after losing skipper Bavuma to injury | Sport",
      description:
        "South African cricket so desperately needed a win, but it did not come in the first ODI between the Proteas and Sri Lanka in Colombo on Thursday.",
      url: "https://www.news24.com/sport/Cricket/Proteas/proteas-go-down-in-opening-sri-lanka-odi-as-skipper-bavuma-injured-20210902",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/11538/05ee13176ec84fa2947c8f8f9c214d2b.jpg",
      publishedAt: "2021-09-02T19:54:26+00:00",
      content:
        "South African cricket so desperately needed a win, but it did not come in the first ODI between the Proteas and Sri Lanka in Colombo on Thursday. \r\nThe Proteas were chasing 301 for victory after the … [+2164 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      newsdata: this.articles,
      page: 1,
      loading: true,
      totalresult: 0,
    };
  }

  async componentDidMount() {
    let dataurl =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=175070ea03734068968646cf88859ad8&pagesize=${this.props.pagesize}`;
    let rowdata = await fetch(dataurl);
    let data = await rowdata.json();
    console.log(data);
    this.setState({
      newsdata: data.articles,
      loading: false,
      totalresult: data.totalResults,
    });
  }
  onpreviousclick = async () => {
    let dataurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=175070ea03734068968646cf88859ad8&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let rowdata = await fetch(dataurl);
    let data = await rowdata.json();
    this.setState({
      newsdata: data.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  onnextclick = async () => {
    let dataurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=175070ea03734068968646cf88859ad8&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let rowdata = await fetch(dataurl);
    let data = await rowdata.json();
    this.setState({
      newsdata: data.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        {this.state.loading && <Loading />}
        <div className="news-wrapper">
          {!this.state.loading &&
            this.state.newsdata.map((card) => {
              return (
                <Newsitem
                  key={card.url}
                  url={card.url}
                  imgsrc={
                    card.urlToImage
                      ? card.urlToImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmyxtoONDs-AQR85tmKT_85WE7ZoSpTUZ68UcIOEpLC4s7CGnHCTEBUJExg8GQ5T_kPY&usqp=CAU"
                  }
                  title={card.title ? card.title.slice(0, 50) : ""}
                  description={card.content ? card.content.slice(0, 120) : ""}
                />
              );
            })}
        </div>

        <div className="control-btn">
          <button
            type="button"
            class="btn btn-primary btn-circle btn-sm"
            onClick={this.onpreviousclick}
            disabled={this.state.page>=2 ? false : true}
          >
            <span class="material-icons-outlined">arrow_back</span>
          </button>
          <button
            type="button"
            class="btn btn-primary btn-circle btn-sm"
            onClick={this.onnextclick}
            disabled={Math.ceil(this.state.totalresult/this.props.pagesize)>this.state.page ? false: true}
          >
            <span class="material-icons-outlined">arrow_forward</span>
          </button>
        </div>
      </>
    );
  }
}

export default News;
