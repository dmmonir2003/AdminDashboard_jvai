/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Button } from "antd";

interface AuthFormProps {
  title: string;
  fields: any[];
  onSubmit: (values: any) => void;
  loading?: boolean;
  buttonLabel?: string;
}

export default function AuthForm({
  title,
  fields,
  onSubmit,
  loading,
  buttonLabel = "Sign in",
}: AuthFormProps) {
  return (
    <div className="w-full">
      {/* Title Styling */}
      <h1 className="text-[32px] font-bold text-[#1a1a1a] text-center mb-10">
        {title}
      </h1>

      <Form layout="vertical" onFinish={onSubmit} requiredMark={false}>
        <div className="flex flex-col gap-6">
          {fields.map((field) => (
            <Form.Item
              key={field.name}
              name={field.name}
              label={
                <span className="text-[16px] font-semibold text-[#333]">
                  {field.label}
                </span>
              }
              rules={field.rules}
            >
              {field.component}
            </Form.Item>
          ))}
        </div>

        {/* Action Button: Match the 67px height and #00aeef color */}
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loading}
          style={{
            height: "67px",
            backgroundColor: "#00aeef",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
          }}
        >
          {buttonLabel}
        </Button>
      </Form>
    </div>
  );
}
