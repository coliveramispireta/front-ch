import { IFormErrors, IFormFields } from "@/types/formHome.types";


export const validateFields = (input: IFormFields): IFormErrors => {
  const errors: IFormErrors = {};
  const regexDocument = /^\d{8}$/; // Número de documento de 8 dígitos
  const regexPhone = /^\d{9}$/;    // Teléfono de 9 dígitos

  if (!regexDocument.test(input.nroDocument)) {
    errors.nroDocument = 'El número de documento debe tener 8 dígitos.';
  }

  if (!regexPhone.test(input.phone)) {
    errors.phone = 'El número de celular debe tener 9 dígitos.';
  }

  if (!input.checkPrivacity) {
    errors.checkPrivacity = 'Debes aceptar la Política de Privacidad.';
  }

  if (!input.checkComunication) {
    errors.checkComunication = 'Debes aceptar la Política de Comunicaciones Comerciales.';
  }

  return errors;
};
