

const NewsLetter = () => {
    return (
        <div className="my-10">
            <form>
    <h6 className="font-bold text-2xl text-center text-black">SIGN UP FOR THE NEWSLETTER</h6> 
    <div className="divider divide-[#EB984E] w-1/3 ml-96"></div>
    <fieldset className="form-control w-80 ml-96"> 
      <div className="join">
        <input type="text" placeholder="email address" className="input input-bordered join-item px-16 border-orange-800" /> 
        <button className="btn bg-amber-950 text-white join-item">SUBSCRIBE</button>
      </div>
    </fieldset>
  </form>
        </div>
    );
};

export default NewsLetter;