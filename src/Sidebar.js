import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" 
                src="https://m.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/lg1_000536.jpg" alt="Logo" />
            <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
            
            <br /> {/* br is a literal break in the componenet, using for spacing */}
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr /> {/* hr is a horizontal row, which is just a line, using for separation */}
            
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    );
}

export default Sidebar;