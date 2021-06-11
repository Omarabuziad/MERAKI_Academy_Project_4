import RequestCard from "./RequestCard"
import ConfirmedCandidates from "./ConfirmedCandidates"
import axios from 'axios'
import React,{useState , useEffect} from 'react'
import "./MyRequest.css"
import Container from '@material-ui/core/Container'

const MyRequest = () => {

    const[myRequests, setMyRequests] = useState()
    const[conCandidates, setConCandidates] = useState()
    const [hideCandidates, setHideCandidates] = useState(true)
    const getMyRequests = async ()=>{
      await axios.post("http://localhost:5000/request/myRequests",{
            userId : JSON.parse(localStorage.getItem('user'))._id
        }).then((result)=>{

            setMyRequests(result.data)})
 
    }


    useEffect(()=>{
        
        getMyRequests()
        console.log(conCandidates)
        

    },[])









    return (
        <div id = "MyRequset">
            <Container maxWidth = 'xs'>

        {hideCandidates&&myRequests ? myRequests.map((elem,i)=>{
            return <RequestCard setHideCandidates = {setHideCandidates} conCandidates = {conCandidates} setConCandidates={setConCandidates} key={i} myRequests= {myRequests} reqId={elem._id}  bloodType = {elem.bloodType}   hospital={elem.hospitalId.name} date={elem.date}/>}):null}
        
        {conCandidates ? conCandidates.map((elem,i)=>{
            return <ConfirmedCandidates setHideCandidates = {setHideCandidates} setConCandidates={setConCandidates}  fullName = {elem.fullName} phoneNumber={elem.phoneNumber} key={i} bloodType= {elem.bloodType} />}):null}
            

            {conCandidates &&  <button onClick= {()=>{setConCandidates(false);setHideCandidates(true) }}>Back</button> }
            </Container>
         </div>

        

       
    )
}

export default MyRequest