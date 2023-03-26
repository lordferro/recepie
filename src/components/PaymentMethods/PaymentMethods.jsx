import { Button, Container } from './PaymentMethods.styled';
import { paymentsMethods } from 'Constants';

export const PaymentMethods = ({ selected, onSelect }) => {
  return (
    <Container>
      <Button
        selected={selected === paymentsMethods.visa}
        onClick={() => onSelect(paymentsMethods.visa)}
      >
        Visa form
      </Button>

      <Button
        selected={selected === paymentsMethods.mastercard}
        onClick={() => onSelect(paymentsMethods.mastercard)}
      >
        Mastercard form
      </Button>

      <Button
        selected={selected === paymentsMethods.apple}
        onClick={() => onSelect(paymentsMethods.apple)}
      >
        Apple Pay form
      </Button>
    </Container>
  );
};
