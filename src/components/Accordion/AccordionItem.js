import React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq__question" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${showDescription}`}
      >
        Different apps will have different usage level. Please see the list below<br /> 
                  Hoichoi - 2 screens <br />
                  Disney+ Hotstar - 4 screens <br />
                  Zee5 - 3 screens <br />
                  Sonyliv - 1 screens <br />
                  Lionsgate - 6 screens
      </p>
    </dd>
  </div>
);

export default AccordionItem;
