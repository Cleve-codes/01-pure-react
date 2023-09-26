import { Profile, Sidebar } from "./Components";
import React from "react";

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
