import "./Section_2.css";
import Card from "../../UI/Card";

function Section_2(props) {

  const datas=props.data;
  

  return (
    <div className="sec-2-con">
      <h2> Iphone Section</h2>
      <div className="card-items">
        {datas.map((item) => {
          return <Card items={item} key={item.id}    handleAddToCart={props.handleAddToCart}/>;
        })}
      </div>
    </div>
  );
}

export default Section_2;
