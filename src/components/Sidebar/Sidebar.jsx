import { NavLink } from 'react-router-dom';
// import SidebarVideo from '../SidebarVideo/SidebarVideo';
import './Sidebar.scss';
import SidebarMolecule from '../SidebarMolecule/SidebarMolecule';

export default function Sidebar({ molecules, onMoleculeClick }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='sidebar'>
      <p className='sidebar__title'>3D MOLECULES</p>

      {molecules.map((molecule) => (
        <SidebarMolecule 
          key={molecule.iupacId}
          molecule={molecule}
          onClick={onMoleculeClick}
        />
      ))}
      
    </div>
  );
}