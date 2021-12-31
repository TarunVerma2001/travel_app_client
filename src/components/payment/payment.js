import toast from 'react-hot-toast';
import { getPaymentInfo } from '../../util/api';
import styles from './payment.module.css';

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const Payment = () => {
  const displayRazorpay = async () => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    console.log('res: ' + res);
    if (!res) {
      toast.error('Raazorpay SDK failed to Load, are you online!');
      return;
    }
    const paymentInfo = await getPaymentInfo();
    const options = {
      key: 'rzp_test_oPTWzmqMZgZlyt',
      amount: paymentInfo.data.amount,
      currency: paymentInfo.data.currency,
      order_id: paymentInfo.data.id,
      name: 'Travelzzz',
      description: 'Thanks for chosing Us!',
      image: 'https://example.com/your_logo',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        email: 'gaurav.kumar@example.com',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <button onClick={displayRazorpay}>SHOW RAZORPAY</button>
    </div>
  );
};

export default Payment;
