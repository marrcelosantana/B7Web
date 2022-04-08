
import Photo from "../../components/Photo/Photo";
import "./HomePage.css";

export default function HomePage () {
  return (
    <div className="container">
      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg" alt="google" />
      </Photo>
    </div>
  );
}