import { TrainingData } from "../data/TrainingData";
const Training = () => {
  return (
    <section id="services-training-section">
      <h1 style={{ textAlign: "center" }}>What You Get With USHNIK Training</h1>
      <h3 style={{ textAlign: "center" }}>Learn. Practice. Grow.</h3>
      <div className="container py-5">
        <div className="row text-center justify-content-center mb-5">
          {TrainingData.map((card, index) => (
            <div
              key={index}
              className={`${
                card.type === "services"
                  ? "col-lg-3 col-md-3 col-12"
                  : "col-lg-4 col-md-4 col-12"
              } mb-4`}
            >
              <div className={`${card.type}-card h-100`}>
                <img src={card.img} alt={card.alt} />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
