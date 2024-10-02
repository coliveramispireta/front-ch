import { useId } from "react";
import IconArrowDown from "../../../public/icons/arrow-down.svg";
import classNames from "classnames";
import '../../styles/components/select.scss'; 

type THideBorderRadius = "tl" | "tr" | "bl" | "br";
interface IProps {
  hideBorderRadius?: THideBorderRadius | THideBorderRadius[];
}
export const Select: React.FC<IProps> = ({ hideBorderRadius }) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={classNames(
        "select",
        hideBorderRadius && Array.isArray(hideBorderRadius)
          ? hideBorderRadius.map((v) => "no-radius-" + v).join(" ")
          : hideBorderRadius
      )}
    >
      <IconArrowDown className="select__arrow" />
      <select name="" id={id}>
        <option value="DNI">DNI</option>
      </select>
    </label>
  );
};
