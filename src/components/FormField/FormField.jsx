import { Field} from 'formik';
import styled from "styled-components";
import { ErrorMessage, Wrapper } from './FormField.styled';

export const FormField = ({ label,name, }) => {return (
  <Wrapper>
    {label && <span>{label}</span>}
    <Field name={name} />
    <ErrorMessage name={name} component="span" />
  </Wrapper>
);};


