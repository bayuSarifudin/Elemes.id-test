import { useCallback, useState, useRef } from "react";
import Container from "@/components/Container";
import { categories } from "@/constant/contents";
import { categoryTxt } from "@/constant/locale";
import { arrow } from "@/assets";

function Categories() {
  const [isHover, setIsHover] = useState("");
  const draggableRef = useRef<HTMLDivElement | null>(null); // Explicitly set the type to HTMLDivElement or null

  const onMouseEnter = useCallback((param: string) => {
    setIsHover(param);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover('');
  }, []);

  const handleNextClick = () => {
    if (draggableRef.current) {
      draggableRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  const handlePrevClick = () => {
    if (draggableRef.current) {
      draggableRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <Container>
      <div className="text-2xl md:text-[38px] font-semibold leading-[30px] md:leading-[50px] pb-6">
        <h2 className="text-dark">{categoryTxt.browser_lbl}</h2>
        <h3 className="text-primary-01">{categoryTxt.receipt_lbl}</h3>
      </div>

      <div className="w-full h-[215px] py-2.5 overflow-x-scroll pb-5 scrollbar-hide scroll-smooth" ref={draggableRef}>
        <div className="flex flex-row min-w-max items-start justify-center gap-3">
          {categories.map((el, index) => {
            return (
              <div
                onMouseEnter={() => onMouseEnter((el.title ?? '') + index)}
                onMouseLeave={onMouseLeave}
                key={index}
                className={`px-20 py-[30px] cursor-pointer flex items-center justify-center flex-col ${el.bg} rounded-lg w-[243px] relative ${isHover == (el.title ?? '') + index ? 'pb-14' : ''} gap-4`}
              >
                <img className="w-[47px] h-[47px]" src={el.icon} alt="" />
                <div className="text-center text-dark space-y-1">
                  <p className="font-semibold leading-5">{el.title}</p>
                  <p className="text-sm">{el.total + ' Items'}</p>
                </div>

                <div className={`${isHover != (el.title ?? '') + index ? 'hidden' : ''} absolute top-0 left-0 w-full h-full bg-food-pattern bg-cover opacity-5`} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full hidden md:flex items-center justify-end gap-4">
        <button onClick={handlePrevClick} className="bg-primary-01 active:scale-95 text-white flex flex-row-reverse items-center gap-3 justify-center px-4 py-2 rounded-[100px]">
          {categoryTxt.prev_lbl}
          <span className="w-[33px] h-[33px] flex items-center justify-center bg-white rounded-full">
            <img src={arrow} alt="prev" />
          </span>
        </button>
        <button onClick={handleNextClick} className="bg-primary-01 active:scale-95 text-white flex flex-row items-center gap-3 justify-center px-4 py-2 rounded-[100px]">
          {categoryTxt.next_lbl}
          <span className="w-[33px] h-[33px] flex items-center justify-center bg-white rounded-full">
            <img className="rotate-180" src={arrow} alt="next" />
          </span>
        </button>
      </div>
    </Container>
  );
}

export default Categories;
