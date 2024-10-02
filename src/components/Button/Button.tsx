import classNames from "classnames";
import '../../styles/components/button.scss'; 

interface IProps {
  title: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
  isLoading?: boolean;
}
export const Button: React.FC<IProps> = ({
  title,
  onClick,
  color = "primary",
  isLoading = false,
}) => {
  return (
    <button
      type="submit"
      className={classNames(
        "button",
        color === "secondary" ? "button--secondary" : "",
        classNames
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Cargando..." : title}
    </button>
  );
};
