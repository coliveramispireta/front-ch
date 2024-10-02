'use client'
import { useState } from "react";
import '../../../../styles/components/input.scss'; 
import '../../../../styles/components/contentHome.scss'; 
import IconCheck from "../../../../../public/icons/check-white.svg";
import '../../../../styles/components/checkbox.scss';
import { Select } from "../../../Select/Select";
import { Button } from "../../../Button/Button";
import { IFormErrors, IFormFields } from "@/types/formHome.types";
import { validateFields } from "@/helpers/contentHome.validate";
import { getUserData } from "@/services/user.service";
import { useUserContext } from "@/context/UserContext";
import classNames from "classnames";

export const ContentHome = () => {
  const { setUser, nextStep } = useUserContext();
  
  const [formData, setFormData] = useState<IFormFields>({
    nroDocument: "",
    phone: "",
    checkPrivacity: false,
    checkComunication: false
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleKeyPress = (e:  React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); 
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // Limpia los errores anteriores
    const fieldErrors = validateFields(formData); // Valida el formulario completo
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors); // Si hay errores, actualiza el estado
      return; // Detén el envío si hay errores
    }
    try {
      setIsLoading(true);
      const userData = await getUserData();
      setUser(userData);
      nextStep();
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contentHome">
      <div className="contentHome__image">
        <img src="/images/family.png" alt="Familia" className="contentHome_image img" />
      </div>
      <form className="contentHome__info info" onSubmit={handleSubmit}>
  <div className="info__group group">
    <div className="group__title">
      <span className="group__title--tag">Seguro Salud Flexible</span>
      <h1 className="group__title--text">Creado para ti y tu familia</h1>
    </div>

    <div className="group__image">
      <img src="/images/family.png" alt="Familia" />
    </div>
  </div>

  <div className="info__separator" />

  <p className="info__p">
    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
    asesoría. 100% online.
  </p>
  
  <div className="info__controls">
    <div className="info__controls--group">
      <Select hideBorderRadius={["tr", "br"]} />

      <label className="input no-radius-tl no-radius-bl">
        Nro. de documento
        <input
          type="text"
          name="nroDocument" // Cambiado de nro_document a nroDocument
          value={formData.nroDocument}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          maxLength={8}
          required
        />
        {errors.nroDocument && (
          <span className="text-[10px] text-red-800 -mt-1">{errors.nroDocument}</span>
        )}
      </label>
    </div>

    <label className="input">
      Celular
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        maxLength={9}
        required
      />
      {errors.phone && (
        <span className="text-[10px] text-red-800 -mt-1">{errors.phone}</span>
      )}
    </label>
  </div>

  
  <div className="info__terms">
    <div
      className="checkbox"
      onClick={() => {
        const newCheckedValue = !formData.checkPrivacity;
        setFormData((prev) => ({
          ...prev,
          checkPrivacity: newCheckedValue,
        }));

        handleChange({
          target: {
            name: "checkPrivacity",
            type: "checkbox",
            checked: newCheckedValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }}
    >
      
      <div
        className={classNames(
          "checkbox__box",
          formData.checkPrivacity ? "checkbox__box--checked" : ""
        )}
      >
        {formData.checkPrivacity && <IconCheck width={16} height={16} />}
      </div>
      <p className="checkbox__label">Acepto la Política de Privacidad</p>
    </div>

    <div
      className="checkbox"
      onClick={() => {
        const newCheckedValue = !formData.checkComunication;
        setFormData((prev) => ({
          ...prev,
          checkComunication: newCheckedValue,
        }));

        handleChange({
          target: {
            name: "checkComunication",
            type: "checkbox",
            checked: newCheckedValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }}
    >
      <div
        className={classNames(
          "checkbox__box",
          formData.checkComunication ? "checkbox__box--checked" : ""
        )}
      >
        {formData.checkComunication && <IconCheck width={16} height={16} />}
      </div>
      <p className="checkbox__label">Acepto la Política de Comunicaciones Comerciales</p>
    </div>

    <a
      href="https://assets.contentstack.io/v3/assets/bltc73a8adddb2104d0/blt446954286ce4e6ec/61bb4b60aac9397f423166be/TERMINOS-Y-CONDICIONES.pdf"
      className="info__terms--a"
      target="_blank"
      rel="noopener noreferrer"
    >
      Aplican Términos y Condiciones.
    </a>
  </div>

  <Button title="Cotiza aquí" isLoading={isLoading} />
  {errors.checkPrivacity && (
          <span className="text-[10px] text-red-800 pt-1">{errors.checkPrivacity}</span>
        )}
         {errors.checkComunication && (
          <span className="text-[10px] text-red-800 ">{errors.checkComunication}</span>
        )}
</form>


    </section>
  );
};