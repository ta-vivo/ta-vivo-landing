import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4 text-center">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="mt-5 md:mt-0 md:col-12 lg:col-12">
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <>
              <Link
                className="btn btn-primary mt-4"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
                {cta.button.sublabel && (
                  <span className="mt-2 text-sm text-gray-500 block">
                    {cta.button.sublabel}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
