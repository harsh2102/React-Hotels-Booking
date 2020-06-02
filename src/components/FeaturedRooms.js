import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Rooms from './Rooms'
import Title from './Title'
export default class FeaturedRooms extends Component {
 static contextType = RoomContext;
    render() 
  {
    let {loading,featuredRooms:rooms} = this.context;
    rooms = rooms.map(room =>{
        return <Rooms key ={room.id} room={room}/>
    })
    return (
      <section className="featured-rooms">
          <Title title="featured rooms"></Title>
          <div className="featured-rooms-center">
              {loading?<Loading/>: rooms}
          </div>
          
         
      </section>
    )
  }
}
