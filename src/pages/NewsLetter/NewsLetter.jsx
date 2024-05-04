import  { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const NewsLetter = () => {
  const textRef = useRef(null);

  return (
    <div className="my-10">
      <form className="flex flex-col items-center">
        <h6 className="font-bold text-2xl text-center text-black mb-4">
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={3000}
            words={['SIGN UP FOR THE NEWSLETTER']}
            onLoop={(loopCount) => {
              console.log(loopCount);
            }}
            ref={(r) => (textRef.current = r)}
          />
        </h6>
        
        <fieldset className="flex flex-col md:flex-row items-center justify-center w-full max-w-xl">
          <input
            type="text"
            placeholder="email address"
            className="input input-bordered join-item px-4 md:mr-2 border-orange-800 mb-2 md:mb-0 w-full md:w-auto"
          />
          <button className="btn bg-amber-950 text-white join-item w-full md:w-auto">
            SUBSCRIBE
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default NewsLetter;
