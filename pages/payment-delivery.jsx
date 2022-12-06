import Container from "../components/Container"
import CoverSection from "../components/CoverSection"
import HeadMeta from "../components/HeadMeta"
import PaymentDelivery from '../public/assets/images/PaymentDelivery.webp'
const PaymentsDelivery = () => {
  return (
    <>
    <HeadMeta title='Payments & delivery' desc='Payments and delivery page' />
    <main>
        <CoverSection height={400} primaryText='Payments & Delivery' btn={false} src={PaymentDelivery} />
        <Container className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 my-10 lg:my-20'>
            <div className="flex flex-col gap-6 lg:gap-10">
                <h4 className="text-2xl lg:text-3xl font-medium">
                    Payments
                </h4>
                <p className="text-lg leading-8">
                We offer over a dozen payment options to ensure you can pay via a method that suits your needs. All payments are processed securely by a third-party payment provider, and are protected by encryption. Should you return any of your order and are due a refund, we will refund the value of your order via the payment method you originally used.
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:gap-10">
                <h4 className="text-2xl lg:text-3xl font-medium">
                Delivery
                </h4>
                <p className="text-lg leading-8">
                Our online store automatically calculates the best shipping routes, rates, and handlers to make sure you receive your poster or print quickly and cheaply. We usually ship orders within 48 hours, and depending on the shipping options you choose, you should receive them within 3-5 working days..
                </p>
            </div>
        </Container>
    </main>
    </>
  )
}

export default PaymentsDelivery