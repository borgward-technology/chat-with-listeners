import { Grid, Typography } from '@mui/material';





const LandingPageCategories: React.FC = () => {

    const texts = [
        "Work stress",
        "Alcohol/drug abuse",
        "Breakups",
        "Chronic Pain",
        "Depression",
        "Disabilities",
        "Domestic Violence",
        "Eating disorder",
        "Exercise Motivation",
        "Family Stress",
        "Financial Stress",
        "Forgiveness",
        "General Mental Health",
        "Getting Unstuck",
        "Loneliness",
        "Managing emotions",
        "Panic attacks",
      ];
  return (
    <Grid container spacing={2} height='80vh' justifyContent={"center"} display={"flex"} margin={"150px 0"} padding={'0 25px'} >
     

      <Grid container spacing={2} justifyContent={"center"} display={"flex"} alignItems={"center"}>
            {texts.map((text) => (
                <Grid  item key={text} xs={12} sm={6} md={4} lg={3}  onClick={() => {
                        // setOption({id: user.id, personText:user.personText});
                    }}>
                        <Typography variant="h6" textAlign={'center'}>
                            {text}
                        </Typography>
                   
                </Grid>
            ))}
        </Grid>


      {/* {texts.map((text, index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="body1">{text}</Typography>
        </Grid>
      ))} */}
    </Grid>
  );
};
   


export default LandingPageCategories;