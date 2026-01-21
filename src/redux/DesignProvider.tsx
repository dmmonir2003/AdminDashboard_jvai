"use client";
import React from "react";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
function DesignProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <StyleProvider hashPriority="high">
        <ConfigProvider>{children}</ConfigProvider>
      </StyleProvider>
    </div>
  );
}

export default DesignProvider;
