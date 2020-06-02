import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'


export default class Services extends Component {
  state={
      services:[
          {
              icon:<FaCocktail/>,
              title:"Free Cocktails",
              info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon:<FaBeer/>,
            title:"Free Beer",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
  }
    render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
            {this.state.services.map((item,index)=>{
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
                
            })}
        </div>
      </section>
    )
  }
}
