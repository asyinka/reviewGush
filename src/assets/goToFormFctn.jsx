export default function scrollToWaitList() {
  const waitlist = document.getElementsByClassName("waitlist-card");
  const waitlistPosition = waitlist.offsetTop;
  window.scrollTo({ top: waitlistPosition, behavior: "smooth" });
}
