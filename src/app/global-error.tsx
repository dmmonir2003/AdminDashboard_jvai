"use client";

import React from "react";
import { Button, Result } from "antd";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  console.error(error); // log error for debugging

  return (
    <Result
      status="error"
      title="Something went wrong!"
      subTitle={error?.message || "An unexpected error occurred."}
      extra={[
        <Button type="primary" onClick={() => reset()} key="retry">
          Try Again
        </Button>,
      ]}
    />
  );
}
