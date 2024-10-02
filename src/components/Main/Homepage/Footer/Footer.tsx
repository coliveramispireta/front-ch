import LogoImage from "../../../../../public/icons/LogoFooter.svg";
import LogoImageMobile from "../../../../../public/icons/LogoFooterMobile.svg";
import '../../../../styles/components/footer.scss'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <LogoImage className="wrapper__logo--desktop" />
        <LogoImageMobile className="wrapper__logo--mobile" />
        <div className="wrapper__separator" />
        <p className="wrapper__copyright">© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  );
};
