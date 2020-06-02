import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {
//         (value) =>{
//           const {loading,sortedRooms,rooms} = value
//           if(loading){
//             return <Loading/>
//           }
//           return (
//             <div>
//             Hello from Rooms Container
//             <RoomFilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/>
//           </div>
//           )
//         }
//       }
//     </RoomConsumer>

//   )
// }
