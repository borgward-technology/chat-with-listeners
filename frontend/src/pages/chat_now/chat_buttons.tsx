import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import chat_image from "../../assets/chatting_image.jpg";
import calling_image from '../../assets/calling_image.jpg';
import { useNavigate } from 'react-router-dom';



const images = [
  {
    url: chat_image,
    title: 'Chat',
    width: '100%',
  },
  {
    url: calling_image,
    title: 'Call',
    width: '100%',
  },
 
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  margin:" 0 20px",
  [theme.breakpoints.down('sm')]: {
    
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {

    const navigate = useNavigate();

    const handleChatButtonClick = (title:string) => {
      console.log("title  ----------    "+title);
        if(title.toLowerCase() === "chat" ||  title === "Chat"){
            navigate("/selecttype");
        } else{
            alert("Please select Chat, Calling will be available soon.")
        }
    }

    const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth < 800);

    React.useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <Box sx={{ padding:"10px",  display: 'flex',flexDirection:(isSmallScreen ? "column" : "row"), }}>
      {images.map((image) => ( //

      
        <ImageButton
        onClick={() => handleChatButtonClick(image.title)}
          focusRipple
          key={image.title}
          style={{
            margin:"10px 20px " ,
            width: "50vw", // image.width
            
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}