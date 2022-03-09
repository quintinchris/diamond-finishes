import { Footer } from "../../components/Footer/Footer";
import { ContactForm } from "./components/ContactForm";
import { FormWithImageUpload } from "src/app/components/FormWithImageUpload/Form";
import { NavBar } from "../../components/NavBar/NavBar";
import { envConfig } from "../../utils";

export function Contact() {
    return (
        <>
        <NavBar />
        {console.log(envConfig.ImageUploadOn)}
        {envConfig.ImageUploadOn ? <FormWithImageUpload /> : <ContactForm />}
        <Footer />
        </>
    )
}