import React from "react";

const Experience = () => {
  return (
    <div>
      <div class="bg-[#001B19] text-[#afa18f] py-12 px-12">
        <div class="max-w-[1240px] mx-auto">
          <h2 class="text-[#4e525a] lg:text-[36px] md:text-[36px] text-[20px] font-bold">
            EXPERIENCE
          </h2>

          <div class="space-y-12 mt-12">
            <div class="flex flex-col md:flex-row justify-between">
              <div class="lg:text-3xl md:text-[36px] text-[20px] font-semibold">
                NOW
              </div>
              <div class="text-right md:text-right mt-4 md:mt-0">
                <p class="lg:text-[64px] md:text-[48px] text-[26px] font-semibold ">
                  Design Lead (Customer)
                </p>
                <a
                  href="https://ease-beta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cursor-pointer text-m md:text-lg lg:text-xl text-[#00A699] "
                >
                  EASE
                </a>
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between">
              <div class="lg:text-3xl md:text-[36px] text-[20px] font-semibold">
                2022
              </div>
              <div class="text-right md:text-right mt-4 md:mt-0">
                <p class="lg:text-[64px] md:text-[48px] text-[26px] font-semibold">
                  Network Engineer
                </p>
                <a
                  href="https://www.huawei.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-m md:text-lg lg:text-xl text-[#00A699] cursor-pointer"
                >
                  Huawei
                </a>
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between">
              <div class="lg:text-3xl md:text-[36px] text-[20px] font-semibold">
                2022
              </div>
              <div class="text-right md:text-right mt-4 md:mt-0">
                <p class="lg:text-[72px] md:text-[48px] text-[26px] font-semibold">
                  System Analyst
                </p>
                <a
                  href="https://nnpcgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-m md:text-lg lg:text-xl text-[#00A699] cursor-pointer"
                >
                  NNPC
                </a>
              </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between">
              <div class="lg:text-3xl md:text-[36px] text-[20px] font-semibold">
                2021
              </div>
              <div class="text-right md:text-right mt-4 md:mt-0">
                <p class="lg:text-[72px] md:text-[48px] text-[26px] font-semibold">
                  Product Designer
                </p>
                <p class="text-m md:text-lg lg:text-xl text-[#00A699]">
                  Light Global Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
