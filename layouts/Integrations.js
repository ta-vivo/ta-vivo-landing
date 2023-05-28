import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Cta from "@layouts/components/Cta";

function Integrations({ data }) {
  const { frontmatter } = data;
  const { title, description, integrations, call_to_action } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        {markdownify(description, "p", "text-center mt-4")}
        <div className="section row  -mt-6">
          {integrations.map((integration, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow relative">
                <div className="absolute top-0 right-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                    Free to use
                  </span>
                </div>
                <div className="relative flex justify-center">
                  <Image
                    className="mr-4"
                    src={integration.image}
                    alt={integration.title}
                    width={40}
                    height={40}
                  />
                  {markdownify(integration.title, "h4")}
                </div>
                <div className="text-center">
                  {markdownify(integration.answer, "p", "faq-body mt-4")}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Cta cta={call_to_action} />
      </div>
    </section>
  );
}

export default Integrations;
