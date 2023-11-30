import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsLetter } from "./NewsLetter";

export const MailChimpForm = () => {


  return(
    <>
    <MailchimpSubscribe 
render={({ subscribe, status, message }) => (
   <NewsLetter 
   status={status}
   message={message}
   onValidated={formData =>subscribe(formData)}/>
  )}/>    </>)
};
