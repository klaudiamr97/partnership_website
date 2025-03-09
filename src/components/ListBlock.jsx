import Image from 'next/image';

export default function ListBlock(props) {
  const { title, imgSrc, imgAltText, listElements } = props;
  return (
    <div className="flex flex-col mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      <div>
        <h2 className="items-center text-center text-accent-gold">{title}</h2>
      </div>
      <div className="flex flex-col lg:flex-row mt-12 lg:mt-20 md:gap-8">
        <div className="relative w-full lg:w-1/2 md:pt-2 lg:pt-0 flex-shrink-0">
          <Image src={imgSrc} alt={imgAltText} style={{ width: 'full', height: 'auto', objectFit: 'cover' }} />
        </div>

        <div className="w-full lg:w-1/2 pt-12 md:pt-0 lg:pt-16 ">
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {listElements.map((listElement, index) => (
              <li key={index} className="flex flex-col">
                <span className="pb-4"><h5>{listElement.label}</h5></span>
                <p >{listElement.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  );
}
