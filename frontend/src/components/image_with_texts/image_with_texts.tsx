
import "../../components/image_with_texts/image_with_texts.css";
import overlayImage from "../../assets/cwl_7.jpeg";

const ImageWithText = () =>  (

  <div className="image-with-content">

      <div className="image-container">
          <img src={overlayImage} alt="about_us_img" />
      </div>

     <div className="content-container">    
        <h2>Why Not Friends Or Family</h2>
        <h4 style={({
                fontWeight:"500", textAlign:"center", maxWidth:"70%"
            })}>There are some things you just can’t tell your friends and family right now. In fact, the closer your friends and family are, the more they tend to feel entitled about letting you know what’s in your best interest. And with that, the more they end up judging you even without intending to. Yes your family and friends do love you. But sometimes you just do not want them to know right now, and do not want their predictable advice at this time.
        </h4>
     </div>

  </div>

)





export default ImageWithText;
