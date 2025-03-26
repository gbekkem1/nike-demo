import { offer } from "../assets/images"
import Button from "../components/Button"
import arrowRight from "../assets/icons/arrow-right.svg"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="30% offer"
          width={773}
          height={687}
          className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span> Offer 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text"> Embark on a shopping experience like no other, where exceptional quality meets unbeatable deals. From premium selections to incredible savings, we deliver unmatched value that sets us apart. </p>
        <p className="mt-6 lg:max-w-lg info-text"> Explore a world of possibilities tailored to your unique tastes, exceeding expectations at every turn. With us, every purchase is an extraordinary experience.</p>
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now"
          iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="text-slate-gray"/>
          </div>
        </div >
    </section>
  )
}

export default SpecialOffer