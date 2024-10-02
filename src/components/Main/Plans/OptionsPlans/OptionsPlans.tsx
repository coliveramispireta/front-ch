import { Button } from "@/components/Button/Button";
import IconHomeLight from "../../../../../public/icons/IconHomeLight.svg";
import { Plan } from "@/types/plans.types";

interface IProps {
  plans: Plan[];
  setPlanSelected: React.Dispatch<React.SetStateAction<Plan | null>>;
}
export const OptionsPlans: React.FC<IProps> = ({ plans, setPlanSelected }) => {

  return (
    <div className="list__plans">
      {plans.map((plan, i) => {
        const { description, name, price } = plan;
        return (
          <div key={i} className="plan">
            <div className="plan__header">
              <div className="group">
                <h1 className="group__name">{name}</h1>
                <h6 className="group__h6">COSTO DEL PLAN</h6>
                <span className="group__price">${price} al mes</span>
              </div>
              <IconHomeLight />
            </div>

            <div className="plan__separator" />

            <ul>
              {description.map((string, index) => (
                <li key={index}>{string}</li>
              ))}
            </ul>

            <Button
              color="secondary"
              title="Seleccionar Plan"
              onClick={() => {
                setPlanSelected(plan);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
