import Image from 'next/image';

const Hero = () => {
  <section className="hero">
    <div className="flex flex-wrap justify-evenly">
      <div className="flex flex-col justify-center w-1/3 mx-auto">
        <h1 className="text-6xl">
          Welcome to{' '}
          <span className="text-brand-primary">Courtesy Flushers</span>!
        </h1>
        <h2 className="text-4xl text-brand-gray">
          Our Business is Literally your Business
        </h2>
        <p className="text-xl">
          We are excited for you to see what we have in the works. A new online
          experience will be coming soon.
        </p>
        <p className="text-xl">
          Please keep an eye on our social media to be the first to know when we
          go live. Also, there is some great content on there already &#x1F609;
        </p>
        <div className="flex flex-wrap">
          <a href="mailto:ian@courtesyflushers.ca">
            <button
              type="button"
              className="px-4 py-2 my-5 mr-5 font-bold text-white rounded bg-brand-gray hover:bg-brand-secondary"
            >
              Send an Email
            </button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/courtesyflushers"
          >
            <button
              type="button"
              className="px-4 py-2 my-5 mr-5 font-bold text-white rounded bg-facebook-brand hover:bg-brand-secondary"
            >
              Follow on Facebook
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/3 mx-auto">
        <Image
          src="/logo.svg"
          height={500}
          width={500}
          alt="Courtesy Flushers Logo"
        />
      </div>
    </div>
  </section>;
};

export default Hero;
