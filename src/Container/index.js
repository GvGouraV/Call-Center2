import React ,{Component} from "react"
import Sidebar from "../components/SideBar/sidebar"
class MainComponent extends Component{

    render(){
        return(
            <Box sx={{ flexGrow: 1 }}>
            <Sidebar/>
          </Box>)

    }
}
export default MainComponent;