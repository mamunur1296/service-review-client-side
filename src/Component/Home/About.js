import React from "react";

const About = () => {
  return (
    <div>
      <section className="bg-orange-100 text-black">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-red-400">
                <h3 className="text-3xl font-semibold">About My Work</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  ARRANGE YOUR MONEY PROPORLY
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Tax planning
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    Company ACT - 1994
                  </time>
                  <p className="mt-3">
                    Monarch Money helps you understand and grow your net worth.
                    No clutter or distracting ads. Confidently track your
                    budget, investments, and spending all in one place with
                    Monarch.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    To Know About VAT Planning
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    Company ACT - 1994
                  </time>
                  <p className="mt-3">
                    All You Need To Know About VAT Planning VAT is a global
                    concern, requiring specialist VAT planning to enable your
                    business to remain compliant while minimising its tax
                    liability. More Information .
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    A Personal Business Advisor
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    Company ACT - 1994
                  </time>
                  <p className="mt-3">
                    Having a mentor can be invaluable to your career
                    development. That said, career development only matters if
                    you are doing the job you currently have very well. Enter
                    the value of an advisor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
