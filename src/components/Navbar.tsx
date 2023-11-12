import { elemes } from "@/assets"
import { navigations } from "@/constant/contents"
import Button from "./Button"
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    ['load', 'scroll'].forEach((evt) => {
      window.addEventListener(evt, handleScroll);
    });

    return () => ['load', 'scroll'].forEach((evt) => {
      window.removeEventListener(evt, handleScroll);
    });
  }, []);

  return (
    <header className={`${scrolled ? 'bg-white' : 'bg-transparent'} z-50 w-full flex items-center justify-center fixed top-0`}>
      <section className="w-full max-w-[1440px] px-8 py-4 md:py-[27px] md:px-10">
        <div className="w-full flex flex-row items-center justify-between gap-4">
          <img className="w-full max-w-[207px]" src={elemes} alt="elemes icon" />

          <ul className="md:flex flex-row hidden w-full max-w-[403px] text-center justify-center gap-8 items-center text-[14px]">
            {
              navigations.map((el, i) => {
                return (
                  <li key={i} className="text-light-01 relative hover:text-dark cursor-pointer">
                    <p>{el.title}</p>
                    {
                      el.hot && (
                        <div className="absolute -top-4 -right-2 bg-red-01 text-white text-[8px] rounded-lg px-2 py-0.5">
                          {'HOT'}
                        </div>
                      )
                    }
                  </li>
                )
              })
            }
          </ul>

          <div className="flex flex-row w-full max-w-[215px] items-center justify-end md:justify-center gap-6">
            <p className="text-dark text-[14px] font-[500] hidden md:block">Masuk</p>
            <Button />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Navbar