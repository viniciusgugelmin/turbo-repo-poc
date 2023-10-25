import { Toast as PrimeToast } from "primereact/toast";

export const Toast = ({ thisRef, position = "top-right" }) => {
  return <PrimeToast ref={thisRef} position={position} />;
};
