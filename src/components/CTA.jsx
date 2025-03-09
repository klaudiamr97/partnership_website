export default function CallToAction(props) {
  const { heading, description, buttonLink, buttonText } = props;
  return (
    <div className="flex flex-col mx-6 my-10 md:my-16 lg:my-24 items-center text-center">
      <h2 className="mb-2 md:mb-4">{heading}</h2>
      <p className="py-4 md:mx-6 md:pt-0 max-w-4xl">{description}</p>
      <a href={buttonLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-button text-white hover:bg-white border-2 hover:text-button-hover hover:cursor-pointer border-button-bg px-8 md:px-16 py-2 rounded-md my-4 transition ease-in-out">
          {buttonText}
        </button>
      </a>
    </div>
  );
}
