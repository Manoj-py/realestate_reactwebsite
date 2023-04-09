import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            This Website Was Built using React Library and Css
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="orangeText">Manoj Gowda V</span>
          <div className="flexCenter f-menu">
            <span>Computer Science & information Technology</span>
            <span>Reva University</span>
            <span>Bengaluru</span>
            <span>563064</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
