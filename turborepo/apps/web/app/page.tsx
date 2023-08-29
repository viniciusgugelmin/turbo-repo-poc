"use client"
import { Button, Header, GlobalContextProvider, useGlobalContext } from "ui";

export default function Page(): JSX.Element {
  return (
    <>
    <GlobalContextProvider>
      <Header text="Web" />
      <Button />
      <LoremComponent />
    </GlobalContextProvider>
    </>
  );
}

function LoremComponent() {
  const { value, setValue } = useGlobalContext()

  console.log(value)

  return <div><button onClick={() => setValue(value === "default" ? "other" : "default")}>{value}</button></div>
}
