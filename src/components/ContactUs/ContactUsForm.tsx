import FormComponent from "../../provider/FormProvider";
import TextFieldElement from "./element/TextFieldElement";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, IContactUs } from "./ContactUs.config";
import { StyledFullWidth, StyledGridForm } from "./COntactUs.style";
import TextAreaElement from "./element/TextAreaFieldElement";
import { StyledBtn } from "../../theme/Components";

const ContactUsForm = () => {
  const methods = useForm<IContactUs>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: IContactUs) => {
    console.log(data);
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
            label="MORE INFORMATION"
            name="message"
            placeholder="Hello, I am looking for Agency to help me out with..."
            rows={10.5}
          />
        </StyledFullWidth>
        <StyledFullWidth>
          <StyledBtn style={{ width: "100%" }} type="submit">
            SUBMIT
          </StyledBtn>
        </StyledFullWidth>
      </StyledGridForm>
    </FormComponent>
  );
};

export default ContactUsForm;
