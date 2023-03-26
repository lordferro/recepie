import { Form } from 'components/Form/Form';
import { FormField } from 'components/FormField/FormField';
import { Formik } from 'formik';
import { paymentSchema } from 'Validation';

const initialValues = { cardHolder: '', cardNumber: '', cvv: '' };

export const MasterCardPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    //   отключаем возможность субмитить форму на 2секунды , you call setSubmitting(false) in your handler to finish the cycle
    setTimeout(() => actions.setSubmitting(false), 2000);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={paymentSchema}
    >
      {/* тут достали пропсы что накинуть на кнопку отключение кнопки после сабмита */}
      {props => (
        //console.log(props.isSubmitting);
        // Form - styled component of Form from formik

        <Form>
          <FormField label="Card holder" name="cardHolder" />
          <FormField label="Card number" name="cardNumber" />
          <FormField label="cvv" name="cvv" />

          {/* тут кнопка отключается когда onSubmit в handleSubmit отключаем что б не нажали второй раз как отправили первый */}
          <button type="submit" disabled={props.isSubmitting}>
            pay
          </button>
        </Form>
      )}
    </Formik>
  );
};
