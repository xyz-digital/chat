import React from "react";
import { List } from "../components/List";

type Room = {
  _id: string;
  title: string;
  link?: string;
}

type RoomsListPageProps = {};

export const RoomsListPage: React.FC<RoomsListPageProps> = (props) => {
  const items: Room[] = [
    {
      _id: "1",
      title: "Room 1",
      link: `/rooms/1`
    },
    {
      _id: "2",
      title: "Room 2",
      link: `/rooms/2`
    },
  ];
  
  return (
    <div className="rooms-list-page container">
      <List items={items} />
    </div>
  );
};
