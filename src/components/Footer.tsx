import { elemes } from "@/assets"
import Container from "./Container"
import { footerTxt } from "@/constant/locale"
import Mail from "@/assets/icons/Mail"
import { useCallback, useState } from "react";
import Phone from "@/assets/icons/Phone";
import Instagram from "@/assets/icons/Instagram";
import { aboutUsList, footerCategoriesList } from "@/constant/contents";
import BurgerIcon from "@/assets/icons/BurgerIcon";

function Footer() {
  const [isHover, setIsHover] = useState("");
  const onMouseEnter = useCallback((param: string) => {
    setIsHover(param);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover('');
  }, []);
  return (
    <>
      <footer className='mt-auto hidden md:block py-10 space-y-10'>
        <Container>
          <section className="bg-additional w-full p-10 rounded-[20px] flex flex-wrap items-start justify-between gap-14">
            <div className="w-full max-w-[336px] space-y-3">
              <img className="w-full max-w-[207px]" src={elemes} alt="elemes icon" />
              <p className="text-[14px] text-light-01">
                {footerTxt.address_txt}
              </p>
              <div className="flex items-center justify-start gap-3">
                <div
                  onMouseEnter={() => onMouseEnter('mail')}
                  onMouseLeave={onMouseLeave}
                  className={`cursor-pointer ${isHover == 'mail' ? 'bg-primary-01' : 'bg-white'} w-fit p-2.5 rounded-full`}
                >
                  <Mail stroke={isHover == 'mail' ? '#FFF' : '#8BAC3E'} />
                </div>
                <div
                  onMouseEnter={() => onMouseEnter('phone')}
                  onMouseLeave={onMouseLeave}
                  className={`cursor-pointer ${isHover == 'phone' ? 'bg-primary-01' : 'bg-white'} w-fit p-2.5 rounded-full`}
                >
                  <Phone stroke={isHover == 'phone' ? '#FFF' : '#8BAC3E'} />
                </div>
                <div
                  onMouseEnter={() => onMouseEnter('insta')}
                  onMouseLeave={onMouseLeave}
                  className={`cursor-pointer ${isHover == 'insta' ? 'bg-primary-01' : 'bg-white'} w-fit p-2.5 rounded-full`}
                >
                  <Instagram stroke={isHover == 'insta' ? '#FFF' : '#8BAC3E'} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg text-dark font-[500]">{footerTxt.categories_lbl}</h3>
              <ul className="text-sm text-light-01 space-y-1">
                {
                  footerCategoriesList.map((el, index) => (
                    <li key={index}>
                      {el.title}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg text-dark font-[500]">{footerTxt.about_lbl}</h3>
              <ul className="text-sm text-light-01 space-y-1">
                {
                  aboutUsList.map((el, index) => (
                    <li key={index}>
                      {el.title}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="space-y-3 w-full max-w-[245px]">
              <h3 className="text-lg text-dark font-[500]">{footerTxt.newsletter_lbl}</h3>
              <p className="text-sm text-light-01">
                {footerTxt.free_txt}
              </p>
              <form action="#" className="border border-dark rounded-lg overflow-hidden pl-4 pr-16 py-1 w-full relative">
                <input placeholder={footerTxt.your_email_lbl} className="border-none focus:outline-none w-full" type="text" name="email" id="email" />
                <button type="submit" className="absolute bg-primary-01 px-3 h-full top-0 text-white font-semibold active:scale-95">
                  {footerTxt.send_lbl}
                </button>
              </form>

              <div className="text-sm flex flex-row items-center justify-start gap-3">
                <Mail />
                <p>{footerTxt.email_elemes_lbl}</p>
              </div>
              <div className="text-sm flex flex-row items-center justify-start gap-3">
                <Phone />
                <p>{footerTxt.phone_elemes_lbl}</p>
              </div>
            </div>
          </section>

          <div className="text-xs text-light-01 w-full text-center pt-10">
            &#169;&nbsp;{footerTxt.copy_text}
          </div>
        </Container>
      </footer>

      <footer className="md:hidden fixed bottom-0 w-full h-[89px] border-t border-border-footer shadow-custom-01 bg-white flex items-center justify-center">
        <Container>
          <section className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <BurgerIcon />
              <p className="text-sm text-light-01">Home</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <BurgerIcon />
              <p className="text-sm text-light-01">Promotions</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <BurgerIcon />
              <p className="text-sm text-light-01">Others</p>
            </div>

          </section>
        </Container>
      </footer>
    </>
  )
}

export default Footer