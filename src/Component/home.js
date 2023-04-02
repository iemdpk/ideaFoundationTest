import React,{useEffect, useState} from "react";
import { AppBar,Toolbar,IconButton,MenuIcon,Typography,Button,ListItemButton,ListItemText,Accordion, AccordionDetails, AccordionSummary,Card,CardActions,CardContent, CardHeader } from "@mui/material";
import axios from "axios";
import { increment } from "../function/add";
import { useSelector,useDispatch } from "react-redux";

function Homepage(){

    var [newsData,setNewsData] = useState([]);
    var [renderIssue,setRenderIssue] = useState();
    var [category,setCategory] = useState([]);

    var state_value = useSelector((state)=>state);
    var dispatch = useDispatch();

    useEffect(()=>{

    
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
                setNewsData(data.data);
                (data.data).map((val)=>{
                        if(category.indexOf(val.userId) == -1){
                        category.push(val.userId);
                    }
                
                });


            });
            
            //Redux Store Implemented
            console.log(state_value.run.value);
            dispatch(increment());
            console.log(state_value.run.value);
            
            
    },[]);


    return(
        <>
            <AppBar position="static">
  <Toolbar variant="dense">
        <h5>TestProject</h5>
  </Toolbar>
</AppBar>

        
        
        {category.map((val)=><div className="show_id">
            
            {/* <Button variant="contained">News {val}</Button> */}
            
            <Accordion elevation={0}>
                <AccordionSummary>
                <Button variant="contained">News {val}</Button>
                </AccordionSummary>
                <AccordionDetails>
                {newsData.map((valId,index)=><div>                
                
                    {valId.userId==val &&  <Accordion elevation={0}>
                    <AccordionSummary>
                            <h6 className="subCate_2">{valId.title}</h6>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card style={{width:300}} elevation={3}>
                            <CardHeader title={valId.title} />
                            <CardContent>
                                {valId.body}
                            </CardContent>
                            <CardActions>
                                <Button variant="contained">Read Later</Button>
                            </CardActions>
                        </Card>

                    </AccordionDetails>
                    </Accordion>
                }



            </div>)}
                </AccordionDetails>
            </Accordion>
            
         

        </div>)}

        


        </>
    )
}

export default Homepage;