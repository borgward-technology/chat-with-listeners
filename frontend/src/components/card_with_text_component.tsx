
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography/Typography";

const ContentWithImage : React.FC<ContentWithImageComponent> = ({heading, subheading, imgUrl, shouldVertical}) => 
 {
    return (
        <Card
            variant="outlined"
            orientation={ shouldVertical ? "vertical" : "horizontal"}
            sx={{
                margin:"20px 0",
                alignItems:"center",
                justifyContent:"center",
                width: ( shouldVertical ? "90%" : "70%"),
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}>
                
        <AspectRatio ratio="2" sx={{ width: "100%" }}>
          <img
            src={imgUrl}
            loading="lazy"
            alt=""
          />
        </AspectRatio>

        <CardContent>
            
          <Typography level="title-lg" id="card-description" sx={{margin:"25px 0",  fontSize:"26px", fontWeight:"700"}}>
            {heading}
          </Typography>

          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          {subheading}
          </Typography>

        </CardContent>
      </Card>
    );
  };
  


  interface ContentWithImageComponent {
    heading : string,
    subheading : string,
    imgUrl : string,
    shouldVertical : boolean,
}



  export default ContentWithImage;