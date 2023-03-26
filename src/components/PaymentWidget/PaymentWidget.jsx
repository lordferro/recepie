import { MasterCardPaymentForm } from 'components/MasterCardPaymentForm/MasterCardPaymentForm';
import { PaymentMethods } from 'components/PaymentMethods/PaymentMethods';
import { VisaPaymentForm } from 'components/VisaPaymentForm/VisaPaymentForm';
import { paymentsMethods } from 'Constants';
import { Component } from 'react';

import { Container } from './PaymentWidget.styled';

export class PaymentWidget extends Component {
  //   концепция выбор одного из многих
  state = {
    selectedMethod: null,
  };

  // каррирование
  // selectPaymentMethod = method => {
  //   return () => {
  //     this.setState({ selectedMethod: method });
  //   };
  // };
  selectPaymentMethod = method => this.setState({ selectedMethod: method });

  render() {
    const { selectedMethod } = this.state;
    return (
      <Container>
        <PaymentMethods
          selected={selectedMethod}
          onSelect={this.selectPaymentMethod}
        />
        {paymentsMethods.visa === selectedMethod && <VisaPaymentForm/>}
        {paymentsMethods.mastercard === selectedMethod && <MasterCardPaymentForm/>}
        {paymentsMethods.apple === selectedMethod && <div>apple</div>}
      </Container>
    );
  }
}
