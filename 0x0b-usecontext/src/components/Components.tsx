import { useUserContext } from "../context/context";
import React from 'react';


interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return <div>{user.name}</div>;
}
