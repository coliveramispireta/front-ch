'use client'
import { useEffect, useState } from "react";
import classNames from "classnames";
import IconCheckWhite from "../.../../../../../public/icons/check-white.svg";
import IconProtectionLight from "../.../../../../../public/icons/IconProtectionLight.svg";
import IconAddUserLight from "../.../../../../../public/icons/iconAddUserLight.svg";
import IconArrowLeft from "../.../../../../../public/icons/IconArrowLeft.svg";
import { OptionsPlans } from "./OptionsPlans/OptionsPlans";
import { useUserContext } from "@/context/UserContext";
import { Plan } from "@/types/plans.types";
import { getPlansData } from "@/services/plans.service";
import '../../../styles/components/plans.scss'; 
import { useRouter } from "next/navigation";

export enum Option {
  "MY_SELF" = 1,
  "FOR_SOMEONE_ELSE" = 2,
}

export const Plans = () => {
  const [option, setOption] = useState<Option | null>(null);
  const [planSelected, setPlanSelected] = useState<Plan | null>(null);
  const [ isLoading, setIsLoading ] = useState<Boolean>(true);
  const [plans, setPlans] = useState<Plan[]>([]);
  const { user } = useUserContext();
  const router = useRouter();

useEffect(() => {
    if ( user === null ) {
      router.push("/")
    };

  }, [user]);

  useEffect(() => {
    console.log("1")
    if (option === null || user === null || plans?.length > 0) return;
    (async () => {
      console.log("user: ", user)
      console.log("2")
      try {
        setIsLoading(true);
        const plansData = await getPlansData();
        setPlans(plansData.list)
        console.log("plansData.list: ", plansData.list)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [option, user, plans]);

  return (
    <section className="stepper">
  
  
      <div className="stepper__container">
        <div
          className="back"
        >
          <button>
            <IconArrowLeft color="#4F4FFF" />
          </button>
          <span>Volver</span>
        </div>

      
          <>
            <h1 className="stepper__container--title">
              {user?.name} ¿Para quién deseas cotizar?
            </h1>
            <h6 className="stepper__container--subtitle">
              Selecciona la opción que se ajuste más a tus necesidades.
            </h6>

            <div className="group__options">
              <div
                className={classNames(
                  "option",
                  option === Option.MY_SELF && "option--selected"
                )}
                onClick={() => setOption(Option.MY_SELF)}
              >
                <div
                  className={classNames(
                    "option__check",
                    option === Option.MY_SELF && "option__check--selected"
                  )}
                >
                  {option === Option.MY_SELF && <IconCheckWhite />}
                </div>
                <IconProtectionLight />
                <h1 className="option__title">Para mi</h1>
                <h3 className="option__description">
                  Cotiza tu seguro de salud y agrega familiares si así lo
                  deseas.
                </h3>
              </div>
              <div
                className={classNames(
                  "option",
                  option === Option.FOR_SOMEONE_ELSE && "option--selected"
                )}
                onClick={() => setOption(Option.FOR_SOMEONE_ELSE)}
              >
                <div
                  className={classNames(
                    "option__check",
                    option === Option.FOR_SOMEONE_ELSE &&
                      "option__check--selected"
                  )}
                >
                  {option === Option.FOR_SOMEONE_ELSE && <IconCheckWhite />}
                </div>
                <IconAddUserLight />
                <h1 className="option__title">Para alguien más</h1>
                <h3 className="option__description">
                  Realiza una cotización para uno de tus familiares o cualquier
                  persona.
                </h3>
              </div>
            </div>

            {isLoading ? (
              <div className="loading">Cargando...</div>
            ) : (
              <OptionsPlans plans={plans} setPlanSelected={setPlanSelected} />
            )}
          </>
      </div>
    </section>
  );
};