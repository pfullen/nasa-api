import React, { useState, useEffect } from 'react';
import {
    Card,
    Typography,
    CardMedia,
    CardContent,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary
} from '@material-ui/core';
import axios from 'axios';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from "styled-components";

import { data } from './Data'

const year = 2018
const months = [...Array(12).keys()]
const days = [...Array(10).keys()]
const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=UxG2z5pURfJnH6rE81cKPH9hTcaSjiua0wQFU7tu'
const day = 1;

console.log(data)

const StyledIcon = styled(ExpandMoreIcon)`
color: white !important;
`;

const StyledUl = styled.ul`
display: flex;
width: 80% !important;
list-style-type: none;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
margin-top: 50px;
`;

const StyledCardMedia = styled(CardMedia)`
    height: 350px;
`

const StyledExpansionPanel = styled(ExpansionPanel)`
background-color:    #1975D2 !important;
color: white !important;
`;

const StyledDetails = styled(ExpansionPanelDetails)`
background-color: #EDEDE7 !important;
color: black; 
`;

const StyledLi = styled.li`
text-decoration: none;
margin: 10px;
padding: 25px;
`
const StyledCard = styled(Card)`
width: 45%;
margin: 10px;
color: red;
backgrond-color: black;
`;

const StyledTypographyTitle = styled(Typography)`
min-height: 65px;
`



export default function Images() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        setUrls(data);
        //     days.map(day => {
        //     const fetchData = async (day) => {
        //         const res = await fetch(`${baseUrl}&date=2018-12-${day}`);
        //         const json = await res.json()
        //         setUrls([...urls, json])
        //     }
        //     fetchData()    
        // })
    }, []);



    // const fetchData = async (day) => {
    //     const res = await fetch(`${baseUrl}&date=2018-12-${day}`);
    //     const json = await res.json()
    //     setUrls([...urls, json])
    // }


    const displayImages = () => {

        return (

            urls.map(url => (
                <StyledCard>
                    {url.media_type === "image" ? (
                        <StyledCardMedia
                            component="img"
                            alt={url.title}
                            image={url.url}
                            title={url.title}
                        />) :

                        <CardMedia
                            component="video"
                            alt={url.title}
                            image={url.hdurl}
                            title={url.title}
                        />

                    }
                    <CardContent>
                        <StyledTypographyTitle gutterBottom variant="h5" component="h2">
                            {url.title}
                        </StyledTypographyTitle>

                        <StyledExpansionPanel color="primary">
                            <ExpansionPanelSummary
                                expandIcon={<StyledIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> Explanation </Typography>
                            </ExpansionPanelSummary>
                            <StyledDetails>
                                <Typography align="left" >
                                    {url.explanation}
                                </Typography>
                            </StyledDetails>
                        </StyledExpansionPanel>
                    </CardContent>
                </StyledCard>)
            )
        )
    }

    return (
        <StyledUl>
            {console.log(urls)}
            {displayImages()}
        </StyledUl>

    );
}
