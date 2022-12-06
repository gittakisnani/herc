import Container from "../components/Container"
import CoverSection from "../components/CoverSection"
import HeadMeta from "../components/HeadMeta"
import Returns from '../public/assets/images/Returns.webp'
const ReturnsPage = () => {
  return (
    <>
    <HeadMeta title='Returns' desc='Returns page' />
    <main>
        <CoverSection height={400} primaryText='Payments & Delivery' btn={false} src={Returns} />
        <Container className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 my-10 lg:my-20'>
            <div className="flex flex-col gap-6 lg:gap-10">
                <h4 className="text-2xl lg:text-3xl font-medium">
                Returns Policy
                </h4>
                <p className="text-lg leading-8">
                In the event that you are unhappy with your poster or print for any reason, you are entitled to return it for a full cash refund (including shipping) up to 30 days after your order arrives. If you return your order after 30 days but within 60 days, instead of a cash refund, you will be offered an exchange equal to the value of your order. <br /> <br />
                If your order arrives damaged or faulty, you have up to 45 days to return it for a full cash refund. All return windows are valid from the date on which your order arrives with you.
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:gap-10">
                <h4 className="text-2xl lg:text-3xl font-medium">
                Refunds Policy
                </h4>
                <p className="text-lg leading-8">
                ou are entitled to cancel your order within 30 days without giving any reason for doing so. In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement.  <br /> <br />

                You can inform us of your decision by e-mail returns@mina.com <br /> <br />

                We will reimburse you no later than 30 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.
                </p>
            </div>
        </Container>
    </main>
    </>
  )
}

export default ReturnsPage