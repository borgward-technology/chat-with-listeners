import { Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';





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
    <div className="landing_page_1_container">
      <Grid container spacing={2} height='80vh' justifyContent={"center"} display={"flex"} margin={"150px 0"} padding={'0 25px'} >

        <a style={({fontSize:30, fontWeight:700, textAlign:'center', padding:'0 25px'})}>
          Empowering Wellness: Your Comprehensive Guide to Overcoming Life's Challenges and Cultivating Mental & Emotional Resilience
        </a>
     


     <Grid container spacing={1} justifyContent={"center"} display={"flex"} alignItems={"center"} >
           {texts.map((text) => (
                <Grid  item key={text} xs={12} sm={6} md={2} lg={3} onClick={() => {
                 // setOption({id: user.id, personText:user.personText});
               }} > 
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
    </div>
  );
};
   


export default LandingPageCategories;