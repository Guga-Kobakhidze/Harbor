import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { StyledBtn } from "../../theme/Components";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, IContactUs } from "./ContactUs.config";
import { StyledFullWidth, StyledGridForm } from "./ContactUs.style";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../config";
import emailjs from "@emailjs/browser";
import FormComponent from "../../provider/FormProvider";
import TextAreaElement from "./element/TextAreaFieldElement";
import TextFieldElement from "./element/TextFieldElement";

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
      .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
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
