'use client' 
import classNames from "classnames";
import LineDashed from "../../../../../public/icons/line-dashed.svg";
import IconArrowLeft from "../../../../../public/icons/IconArrowLeft.svg";
import '../../../../styles/components/plans.scss'
import { useRouter } from "next/navigation";

const Steaps = ({ page }: { page: string }) => {
  const router = useRouter();
  console.log("params.slug", page)
  console.log("Classes for breadcrumb circle:", 
    classNames(
      "breadcrumb__circle",
      page === "plans" ? "breadcrumb__circle--selected" : ""
    )
  );

  return (
    <>
      <div className="stepper_breadcrumb breadcrumb">
        <div
          className={classNames(
            "breadcrumb__circle ",
            page == "plans" ? " breadcrumb__circle--selected" : ""
          )}
        >
          1
        </div>
        <h3
          className={classNames(
            "breadcrumb__title",
            page == "plans" && "breadcrumb__title--selected"
          )}
        >
          Planes y coberturas
        </h3>
        <LineDashed />
        <div
          className={classNames(
            "breadcrumb__circle",
            page === "summary" ? "breadcrumb__circle--selected" : ""
          )}
        >
          2
        </div>
        <h3
          className={classNames(
            "breadcrumb__title",
            page === "summary" && "breadcrumb__title--selected"
          )}
        >
          Resumen
        </h3>
      </div>

      <div className="breadcrumb__mobile">
        <button onClick={() => router.push("/")} >
          <IconArrowLeft color="#a9afd9" />
        </button>
        <p>Paso {page === "plans" ? 1 : 2} de 2</p>
        <div className="progress">
          <div style={{ width: page === "plans" ? "50%" : "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Steaps;
