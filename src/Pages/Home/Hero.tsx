import { mainImg } from "@/assets"
import Button from "@/components/Button"
import Container from "@/components/Container"
import StarRating from "@/components/Rating"
import { HeroTxt } from "@/constant/locale"

function Hero() {
  return (
    <section className="w-full h-max relative py-28">
      <div className="bg-food-pattern opacity-5 -z-10 bg-cover bg-no-repeat absolute top-0 h-full w-full">
      </div>

      <Container>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-20">
          <div className="w-full max-w-[482px] space-y-8">
            <h1 className="text-5xl md:text-[64px] font-semibold text-primary-01">
              {HeroTxt.tag_line}
            </h1>

            <div className="hidden md:block space-y-8">
              <p className="text-[18px] text-light-01">
                {HeroTxt.desc_txt}
              </p>

              <div className="w-full flex flex-row gap-6 items-center justify-start">
                <Button width="w-full max-w-[149px]" shadow="shadow-custom-01" text={HeroTxt.daftar_lbl} />
                <Button bg="bg-light-gray-02" fontColor="text-dark" width="w-full max-w-[98px]" text={HeroTxt.about_lbl} />
              </div>
            </div>
          </div>

          <div className="w-[60%] md:w-full max-w-[651px] relative flex items-center justify-start md:justify-center">
            <div className="rounded-full bg-light-gray-02 w-fit p-6 md:p-10">
              <img className="w-full max-w-[412px]" src={mainImg} alt="main dish" />
            </div>

            <div className="absolute w-[292px] bg-white/75 rounded-[17px] p-6 flex items-center shadow-custom-02 justify-center md:left-0 md:bottom-4 -right-[60%] -bottom-[5%]">
              <div className="w-full flex flex-row gap-4 items-center justify-start">
                <img className="w-[53px]" src={mainImg} alt="" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold">Green Salad Tomato</h3>
                  <p className="text-xs text-light-01">Tomato</p>
                  <StarRating rating={4} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-8">
            <p className="text-[18px] text-light-01">
              {HeroTxt.desc_txt}
            </p>

            <div className="w-full flex flex-row gap-6 items-center justify-start">
              <Button width="w-full max-w-[149px]" shadow="shadow-custom-01" text={HeroTxt.daftar_lbl} />
              <Button bg="bg-light-gray-02" fontColor="text-dark" width="w-full max-w-[98px]" text={HeroTxt.about_lbl} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero