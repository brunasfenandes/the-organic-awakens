import { NavLink } from 'react-router-dom';
// import SidebarVideo from '../SidebarVideo/SidebarVideo';
import './Sidebar.scss';
import SidebarMolecule from '../SidebarMolecule/SidebarMolecule';

export default function Sidebar() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='sidebar'>
      <p className='sidebar__title'>3D MOLECULES</p>
      
      {/* {videos.map((video) => {
        return (
          <NavLink 
            key={video.id}
            to={`/videos/${video.id}`}
            onClick={handleScrollToTop}
          >
            <SidebarVideo 
              key={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          </NavLink>
        )
      })} */}

      <SidebarMolecule />
      <SidebarMolecule />
      <SidebarMolecule />
      <SidebarMolecule />
      <SidebarMolecule />
      <SidebarMolecule />
      <SidebarMolecule />
      <SidebarMolecule />
      
    </div>
  );
}