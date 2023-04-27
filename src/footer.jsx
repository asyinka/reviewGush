import FooterIcons from "./assets/footerIcons";
import ProjectName from "./assets/projectName";

const FooterSection = () => {
  return (
    <footer>
      <ProjectName />
      <p>&copy; 2022 Reviewgush. All rights reserved</p>
      <FooterIcons />
    </footer>
  );
};

export default FooterSection;
