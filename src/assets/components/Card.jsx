function Card({ data }) {
  return (
    <div className="container">
      <div className="card  flex mobile:flex-col mobile:align-center rounded-lg bg-white max-w-4xl max-w-2xl-mobile mx-auto p-4 relative  z-10 justify-between  md:p-2 ">
        <div className="mobile:ps-8">
          <p className="text-darkGray font-medium text-sm-mobile">IP Address</p>
          <h3 className="font-bold text-xl">{data.ip}</h3>
        </div>
        <div className="border-s-2 ps-8 mobile:border-none">
          <p className="text-darkGray font-medium text-sm-mobile">Location</p>
          <h3 className="font-bold text-xl">
            {data.location.region}, {data.location.country} &#160;
            <br />
            {data.location.geonameId}
          </h3>
        </div>
        <div className="border-s-2 ps-8 mobile:border-none">
          <p className="text-darkGray font-medium text-sm-mobile">Timezone</p>
          <h3 className="font-bold text-xl">
            UTC &#160;
            {data.location.timezone}
          </h3>
        </div>
        <div className="border-s-2 ps-8 mobile:border-none">
          <p className="text-darkGray font-medium text-sm-mobile">iSP</p>
          <h3 className="font-bold text-xl">{data.isp}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
