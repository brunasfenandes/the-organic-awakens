import './SidebarMolecule.scss';

export default function SidebarMolecule({ molecule, onClick }) {
  const { iupacId, formula, info } = molecule;

  return (
    <div className='sidebar__molecule' onClick={() => onClick(molecule)}>
      <div className='sidebar__image'>
        <img className='sidebar__prev' src={molecule.image} alt={`${molecule.iupacId} image`}/>
      </div>

      <div className='sidebar__info'>
        <p className='sidebar__mol-name'>{molecule.iupacId}</p>
      </div>
    </div>
  );
}