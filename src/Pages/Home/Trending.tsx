import Button from "@/components/Button"
import Container from "@/components/Container"
import StarRating from "@/components/Rating"
import { trending } from "@/constant/contents"
import { trendingTxt } from "@/constant/locale"
import { useCallback, useState } from "react"

function Trending() {
  const [isHover, setIsHover] = useState("");
  const onMouseEnter = useCallback((param: string) => {
    setIsHover(param);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover('');
  }, []);
  return (
    <Container>
      <div className="text-2xl md:text-[38px] font-semibold leading-[30px] md:leading-[50px] pb-6">
        <h2 className="text-dark">{trendingTxt.browser_lbl}</h2>
        <h3 className="text-primary-01">{trendingTxt.receipt_lbl}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-[30px]">
        {
          trending.map((el, index) => {
            return (
              <div
                key={index}
                className={`${el.bg} px-[25px] py-[30px] cursor-pointer relative rounded-[17px] shadow-custom-02 font-semibold space-y-2`}
                onMouseEnter={() => onMouseEnter((el.title ?? '') + index)}
                onMouseLeave={onMouseLeave}
              >
                <div className="h-[120px] w-[118px] overflow-hidden rounded-lg">
                  <img className="w-full h-full object-cover" src={el.img} alt={el.title} />
                </div>
                <div>
                  <p className="text-black text-[26px] m-0">
                    {el.title}
                  </p>
                  <p className="text-primary-01 text-[18px] pb-2">
                    {el.category}
                  </p>
                  <StarRating rating={el.rating ?? 5} />
                </div>

                <div className={`${isHover != (el.title ?? '') + index ? 'hidden' : ''} absolute top-0 left-0 w-full h-full bg-food-pattern bg-cover opacity-5`} />
              </div>
            )
          })
        }
      </div>

      <div className="w-full pt-16">
        <Button width="w-max mx-auto" px="px-8" py="py-3" text={trendingTxt.all_receipt_lbl} />
      </div>
    </Container>
  )
}

export default Trending