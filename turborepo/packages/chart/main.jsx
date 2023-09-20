import { GlobalContextProvider } from "context";
import { ChartComponent } from "./index";

console.log("ChartComponent");
export const Chart = (props) => {
  return (
    <GlobalContextProvider>
      <ChartComponent {...props} />
    </GlobalContextProvider>
  );
};
