import './SidebarMolecule.scss';

export default function SidebarMolecule() {
  return (
    <div className='sidebar__molecule'>
      <div className='sidebar__image'>
        <img className='sidebar__prev' />
      </div>

      <div className='sidebar__info'>
        <p className='sidebar__mol-name'>Name</p>
      </div>
    </div>
  );
}