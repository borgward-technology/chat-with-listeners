import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e : React.KeyboardEvent<HTMLButtonElement>) => {
      console.log("name ->  "+name);
      console.log("email ->  "+email);
      console.log("message ->  "+message);
      e.preventDefault();
    };
    
    return (
        <Box
            sx={{
              marginTop:'50px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            }}
        >
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>

          <Typography variant="h4" align="center" mb={2}>
            Contact Us
          </Typography>


          <form onSubmit={() => {

          }}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }} onClick={() => handleSubmit}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    );
}


export default ContactForm;