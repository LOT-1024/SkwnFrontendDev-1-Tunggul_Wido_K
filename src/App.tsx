import { ShoppingBag, ChevronRight, X, Text, Search, Play } from "lucide-react";
import { useState } from "react";
import sofa from "@/assets/sofa.png";
import logo_1 from "@/assets/client_logo/logo_1.png";
import logo_2 from "@/assets/client_logo/logo_2.png";
import logo_3 from "@/assets/client_logo/logo_3.png";
import logo_4 from "@/assets/client_logo/logo_4.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFurnitureDropdownOpen, setFurnitureDropdownOpen] = useState(false);
  const [isMobileFurnitureOpen, setMobileFurnitureOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-white text-[#2F241F] py-4 min-h-[8vh] lg:h-[8vh] shadow-sm top-0 sticky z-50">
        <div className="w-[86%] mx-auto lg:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-9 h-7 lg:w-11 lg:h-9 relative">
              <div className="absolute top-0 right-0 w-5 h-5 lg:w-7 lg:h-7 bg-[#4b3931] rounded-md mr-2"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 lg:w-7 lg:h-7 bg-[#2F241F] rounded-md mr-2"></div>
            </div>
            <h1 className="text-2xl font-bold text-[#2F241F]">Dekoor</h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-[#2F241F] hover:opacity-80 transition-opacity"
              onMouseEnter={() => setFurnitureDropdownOpen(false)}
            >
              About us
            </a>
            <div className="relative group">
              <button
                className="text-[#2F241F] hover:opacity-80 h-full transition-opacity flex items-center"
                onClick={() =>
                  setFurnitureDropdownOpen(!isFurnitureDropdownOpen)
                }
                onMouseEnter={() => setFurnitureDropdownOpen(true)}
              >
                Furniture{" "}
                <ChevronRight
                  className={`ml-1 transform ${
                    isFurnitureDropdownOpen ? "rotate-90" : "rotate-90"
                  }`}
                  size={16}
                />
              </button>
              {isFurnitureDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-4 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                  onMouseLeave={() => setFurnitureDropdownOpen(false)}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-[#2F241F] hover:bg-[#E5F0B6]/20 transition-colors"
                  >
                    Living Room
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-[#2F241F] hover:bg-[#E5F0B6]/20 transition-colors"
                  >
                    Bedroom
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-[#2F241F] hover:bg-[#E5F0B6]/20 transition-colors"
                  >
                    Dining
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-[#2F241F] hover:bg-[#E5F0B6]/20 transition-colors"
                  >
                    Office
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-[#2F241F] hover:bg-[#E5F0B6]/20 transition-colors"
                  >
                    Outdoor
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-[#2F241F] hover:opacity-80 transition-opacity"
              onMouseEnter={() => setFurnitureDropdownOpen(false)}
            >
              Partnerships
            </a>
            <a
              href="#"
              className="text-[#2F241F] hover:opacity-80 transition-opacity"
              onMouseEnter={() => setFurnitureDropdownOpen(false)}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden lg:block bg-[#E5F0B6] text-[#2F241F] px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
              Sign Up
            </button>
            <button className="hidden lg:block bg-[#2F241F] text-white p-2 rounded-md">
              <ShoppingBag />
            </button>

            <button
              className="md:hidden text-[#2F241F]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Text size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed w-screen lg:hidden bg-white border-t border-gray-200 py-4 mt-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#"
                className="text-[#2F241F] hover:opacity-80 transition-opacity"
              >
                About us
              </a>
              <div>
                <button
                  className="text-[#2F241F] hover:opacity-80 transition-opacity flex items-center justify-between w-full"
                  onClick={() => setMobileFurnitureOpen(!isMobileFurnitureOpen)}
                >
                  Furniture{" "}
                  <ChevronRight
                    className={`transform ${
                      isMobileFurnitureOpen ? "rotate-90" : "rotate-0"
                    }`}
                    size={16}
                  />
                </button>
                {isMobileFurnitureOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a
                      href="#"
                      className="block py-1 text-[#2F241F] hover:opacity-80 transition-opacity"
                    >
                      Living Room
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-[#2F241F] hover:opacity-80 transition-opacity"
                    >
                      Bedroom
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-[#2F241F] hover:opacity-80 transition-opacity"
                    >
                      Dining
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-[#2F241F] hover:opacity-80 transition-opacity"
                    >
                      Office
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-[#2F241F] hover:opacity-80 transition-opacity"
                    >
                      Outdoor
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-[#2F241F] hover:opacity-80 transition-opacity"
              >
                Partnerships
              </a>
              <a
                href="#"
                className="text-[#2F241F] hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
      <main>
        <section className="w-full flex flex-col lg:flex-row h-[92vh]">
          <div className="md:w-[63.75%] flex flex-col justify-center h-[56vh] md:h-auto">
            <div className="w-full lg:w-[93%] flex justify-center lg:justify-end">
              <div className="w-[83.4%] h-full">
                <h1 className="text-[32px] text-center md:text-start lg:text-[72px] font-bold leading-tight mb-4">
                  The kind of <span className="text-[#b0a16d]">furniture</span>{" "}
                  you have been looking for
                </h1>
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-[14px] lg:gap-8 lg:text-[24px]">
                  <button className="flex items-center gap-2 bg-[#dfe2b4] text-black font-medium py-[15px] w-full lg:w-auto justify-center lg:py-[22px] lg:px-[45px] rounded-lg">
                    <Search size={24} />
                    SEARCH CATALOG
                  </button>
                  <button className="flex items-center gap-2 border border-black text-black font-medium py-[15px] w-full lg:w-auto justify-center lg:py-[22px] lg:px-[45px] rounded-lg">
                    <Play size={24} />
                    WATCH VIDEOS
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[37.25%] relative h-[36vh] lg:h-auto">
            <img
              src={sofa}
              alt="sofa image"
              className="object-fill w-full h-full"
            />
            <p className="absolute top-[5%] left-[9.2%] text-white font-semibold text-[14px] lg:hidden">
              HIGHLIGHTED PRODUCT
            </p>
            <div className="aspect-video absolute bottom-[12.3%] left-[9.2%]">
              <div className="bg-white/50 text-[14px] md:text-[24px] w-fit text-black text-sm font-semibold px-2 py-1 lg:px-[16px] lg:py-[8px] rounded-lg">
                $329
              </div>
              <h2 className="text-[32px] lg:text-[64px] text-white font-semibold mb-2">
                Pösht Sofa
              </h2>
              <button className="bg-black text-[12px] text-white text-sm justify-center w-full py-[12px] lg:px-[24px] lg:py-[16px] flex items-center gap-2 rounded-lg">
                VIEW DETAILS
                <ChevronRight />
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#2D221C] text-[#D6DD9E] h-[92vh]">
          {/* Top Section: Why Choose Us */}
          <div className="w-[80.3%] h-[61.44%] mx-auto flex flex-col justify-center">
            <p className="mb-2 text-[14px] lg:text-[24px] lg:text-start text-center">
              WHY CHOOSE US?
            </p>
            <h2 className="text-[24px] lg:text-[64px] lg:text-start text-center font-bold leading-tight mb-5">
              We care about details and the quality of our products
            </h2>

            <div className="w-full flex lg:justify-center">
              <div className="w-[80%] flex flex-col text-[14px] lg:justify-center lg:text-[24px] lg:flex-row gap-5">
                {/* Feature 1 */}
                <div className="flex items-center gap-5">
                  <div className="bg-[#B0A16D] rounded-md p-2 text-white">
                    <Search />
                  </div>
                  <p className="font-semibold">
                    MANUFACTURED WITH <br /> QUALITY MATERIALS
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-5">
                  <div className="bg-[#B0A16D] rounded-md px-2 py-1.5 w-10 text-center text-xl font-bold">
                    5
                  </div>
                  <p className="font-semibold">
                    5 YEARS OF WARRANTY <br /> FOR EACH PRODUCT
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-5">
                  <div className="bg-[#B0A16D] rounded-md p-2">
                    <ShoppingBag />
                  </div>
                  <p className="font-semibold">
                    20 YEARS OF <br /> EXPERTISE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Partnered Brands */}
          <div className="bg-white h-[38.66%] flex justify-center">
            <div className="lg:w-[80.3%] flex flex-col justify-center lg:justify-between items-center lg:flex-row lg:gap-10">
              <div className="text-center lg:text-start mb-4">
                <h3 className="text-4xl lg:text-[96px] font-bold mb-2 text-black">
                  25+
                </h3>
                <p className="text-sm lg:text-[24px] text-gray-600">
                  PARTNERED BRANDS
                </p>
              </div>

              {/* Company Logos (placeholder red boxes) */}
              <div className="flex flex-wrap justify-center gap-6 lg:gap-28">
                <img
                  src={logo_1}
                  className="w-16 lg:w-28 aspect-video rounded"
                />
                <img
                  src={logo_2}
                  className="w-16 lg:w-28 aspect-video rounded"
                />
                <img
                  src={logo_3}
                  className="w-16 lg:w-28 aspect-video rounded"
                />
                <img
                  src={logo_4}
                  className="w-16 lg:w-28 aspect-video rounded"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
