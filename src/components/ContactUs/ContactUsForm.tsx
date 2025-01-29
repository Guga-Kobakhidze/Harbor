import FormComponent from "../../provider/FormProvider";
import TextFieldElement from "./element/TextFieldElement";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, IContactUs } from "./ContactUs.config";
import { StyledFullWidth, StyledGridForm } from "./ContactUs.style";
import TextAreaElement from "./element/TextAreaFieldElement";
import { StyledBtn } from "../../theme/Components";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_API_HARBOR_ID;
const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;

const ContactUsForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm<IContactUs>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: IContactUs) => {
    setLoading(true);
    emailjs
      .send(serviceId, templateId, data, publicKey)
      .catch((error) => console.error(error))
      .finally(() => {
        reset();
        setLoading(false);
      });
  };

  return (
    <FormComponent methods={methods} submit={handleSubmit(onSubmit)}>
      <StyledGridForm>
        <TextFieldElement
          name="fullName"
          label="Full Name"
          placeholder="Name and Surname"
        />
        <TextFieldElement
          name="email"
          label="Email Address"
          placeholder="mail@company.com"
        />
        <TextFieldElement
          label="Industry"
          name="industry"
          placeholder="Write your company's industry"
        />
        <TextFieldElement
          name="number"
          type="number"
          label="CONTACT NUMBER"
          placeholder="Prone Number"
        />
        <StyledFullWidth>
          <TextAreaElement
            rows={10.5}
            name="message"
            label="MORE INFORMATION"
            placeholder="Hello, I am looking for Agency to help me out with..."
          />
        </StyledFullWidth>
        <StyledFullWidth>
          <StyledBtn disabled={loading} style={{ width: "100%" }} type="submit">
            SUBMIT
          </StyledBtn>
        </StyledFullWidth>
      </StyledGridForm>
    </FormComponent>
  );
};

export default ContactUsForm;
