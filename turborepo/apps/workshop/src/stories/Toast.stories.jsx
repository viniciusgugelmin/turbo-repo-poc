import { useRef, useEffect, useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";

import { Toast } from "ui";

const ToastComponent = (props) => {
  const toastRef = useRef(null);
  const oldProps = useState(props);

  useEffect(() => {
    if (oldProps !== props && toastRef.current) {
      toastRef.current.clear();
    }

    if (!toastRef.current) return;

    const life = 10000;

    const content = {
      severity: props.severity,
      summary: props.summary,
      detail: props.detail,
      closable: false,
      life,
    };

    toastRef.current.show(content);

    const interval = setInterval(() => {
      toastRef.current.show(content);
    }, life + 1000);

    return () => clearInterval(interval);
  }, [toastRef, props]);

  return (
    <>
      <Toast {...props} thisRef={toastRef} />
    </>
  );
};

const Default = {
  component: Toast,
  argTypes: {
    position: {
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      control: { type: "select" },
    },
    severity: {
      options: ["error", "success", "info", "warn"],
      control: { type: "select" },
    },
    summary: {
      control: { type: "text" },
    },
    detail: {
      control: { type: "text" },
    },
  },
  render: (args) => <ToastComponent {...args} />,
};

export const Info = {
  ...Default,
  args: {
    severity: "info",
    summary: "Info",
    detail: "Info",
  },
};

export const Success = {
  ...Default,
  args: {
    severity: "success",
    summary: "Success",
    detail: "Success",
  },
};

export const Warn = {
  ...Default,
  args: {
    severity: "warn",
    summary: "Warn",
    detail: "Warn",
  },
};

export const Error = {
  ...Default,
  args: {
    severity: "error",
    summary: "Error",
    detail: "Error",
  },
};

export default Default;
