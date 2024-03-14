import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Person {
    id : number,
    personText : string,
}

const userList : Person[] = [
    {id:0 , personText: "Father"},
    {id:1 , personText: "Mother"},
    {id:2 , personText: "Son"},
    {id:3 , personText: "Daughter"},
    {id:4 , personText: "Husband"},
    {id:5 , personText: "Wife"},
    {id:6 , personText: "Brother"},
    {id:7 , personText: "Sister"},
    {id:8 , personText: "GrandFather"},
    {id:9 , personText: "GrandSon"},
    {id:10 , personText: "Uncle"},
    {id:11 , personText: "Aunt"},
    {id:12 , personText: "Cousins"},
    // {id:13 , personText: "Other"},
];


const PersonGrid : React.FC  = ()=> {

const[selectedOption, setOption] = useState<Person | null>(null);
const navigate = useNavigate();


const handleNextButton = () => {
    console.log("id is  ->>>   "+selectedOption?.id);
    navigate("/selectduration");
}


    return (
        <div style={{ alignItems:"center", justifyContent:"center", display:'flex', flexDirection:"column", padding:"0 20px "}}>
        <div style={({height:"150px"})}></div>
        <Typography variant="h4">
                            Select with Whom you want to Talk.
        </Typography>

        <div style={({height:"50px"})}></div>
        <Grid container spacing={2} justifyContent={"center"} display={"flex"} alignItems={"center"}>
            {userList.map((user) => (
                <Grid  item key={user.id} xs={12} sm={6} md={4} lg={3}  onClick={() => {
                        setOption({id: user.id, personText:user.personText});
                    }}>
                    <Paper elevation={3}  style={{ border: selectedOption?.id === user.id ? "solid 1px black" : "", padding:16, cursor: 'pointer'}}>
                        <Typography variant="h6">
                            {user.personText}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
        <div style={({height:"20px"})}></div>
        {selectedOption === null ? <div></div>:(<Button variant="contained" color="primary" style={{
          marginTop: 16,
          backgroundColor: 'black', // Set button background color
          color: 'white', // Set button text color
          borderRadius: 8, // Set button border radius
          fontSize: '1.2rem', // Set button font size
          padding: '12px 24px', // Set button padding
        }} onClick={handleNextButton}>
            Next
        </Button>)}
        <div style={({height:"50px"})}></div>
        </div>
    );
}

export  default PersonGrid;