import "./darkMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
  // Toggle dark mode by adding/removing a class from the body
  const DarkHandle = () => {
    document.querySelector("body").classList.toggle("dark-mode");
  };

  return (
    <div className="dark-mode-icon">
      <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandle} />
    </div>
  );
}
