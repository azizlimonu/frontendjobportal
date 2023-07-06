import { Box } from "@mui/material"
import SidebarDashboard from "./Sidebar"
import HeaderDashboard from "./HeaderDashboard"

const DashboardLayout = (Component) => ({ ...props }) => {
  return (
    <div style={{ display: 'flex', minHeight: "100vh" }}>
      <SidebarDashboard />
      
      <Box sx={{ width: "100%", bgcolor: "#002952" }}>
        <HeaderDashboard />
        <Box sx={{ p: 3 }}>
          <Component {...props} />
        </Box>
      </Box>
    </div>
  )
}

export default DashboardLayout