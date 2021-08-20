import React from "react";
import { useParams } from "react-router";
import { List } from "../components/List";

type RoomPageProps = {

};

type RoomPageParams = {
  id: string;
}

export const RoomPage: React.FC<RoomPageProps> = (props) => {
  const params = useParams<RoomPageParams>();

  const listItems = [
    {
      title: "First message"
    },
    {
      title: "Second message"
    }
  ]

  return (
    <div className="room-page container">
      <List items={listItems}>

      </List>
    </div>
  );
}