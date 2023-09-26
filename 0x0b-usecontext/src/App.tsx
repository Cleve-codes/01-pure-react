import { useState } from "react";
import 'typescript';
//import React from "react";

import { DashboardContext } from "./context/context";
import Dashboard from "./components/Dashboard";

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [user] =
    useState <
    User >
    {
      isSubscribed: true,
      name: "You",
    };

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
