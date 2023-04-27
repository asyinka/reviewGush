import { useRef } from "react";
import WaitlistSection from "../../pages/Waitlist";

export default function scrollToWaitList() {
  const waitlistRef = useRef(null);
  const handleClick = () => {
    const waitlistPosition = waitlistRef.current.offsetTop;
    window.scrollTo({ top: waitlistPosition, behavior: "smooth" });
  };
  return (
    <>
      <WaitlistSection ref={waitlistRef} />
      <ButtonComp
        HandleClick={handleClick}
        className="navBar-Button button-primary button-primary--text"
        btnTxt="Get Started"
      />
    </>
  );
}
