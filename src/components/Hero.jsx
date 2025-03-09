import Image from 'next/image';

export default function Hero(props) {
  const { heroImg, companyLogo, digivateLogo, title, description } = props;
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {heroImg && (
        <div className="relative w-full h-full">
          <Image
            src={heroImg}
            alt="hero-image"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0  bg-gray-950 md:bg-gray-900 opacity-50 z-0"></div>
        </div>
      )}
      <div className="absolute top-0 md:left-0 m-4 z-10">
        <Image
          src={companyLogo}
          alt="Artichoke Logo"
          width={190}
          height={50}
          style={{ objectPosition: 'center' }}
          priority
        />
      </div>

      <div className="absolute flex flex-col items-center text-center z-10 m-4">
        <Image src={digivateLogo} alt="Digivate Logo" width={100} height={50} style={{ objectPosition: 'center' }} />
        <h1 className="font-primary text-white mt-4">
          <span className="text-accent-gold">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
        </h1>
        <h5 className="px-4 md:px-16 lg:px-0 text-white mt-4">{description}</h5>
      </div>
    </div>
  );
}
