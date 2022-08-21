import {Footer} from "../../components/Footer/Footer";
import {FormWithImageUpload} from "src/components/FormWithImageUpload/Form";
import {NavBar} from "../../components/NavBar/NavBar";

export function Contact() {
    return (
      <>
        <NavBar />
        <FormWithImageUpload />
        <Footer />
      </>
    );
}