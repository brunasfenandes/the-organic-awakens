import './MolInfo.scss';

export default function MolInfo({ molecule }) {
  if (!molecule) {
    return <p>Select a molecule to see its details here.</p>;
  }

  return (
    <div className="mol-info">
      <h1 className='mol-info__name'>{molecule.iupacId}</h1>
      <p className='mol-info__formula'>Formula: {molecule.formula}</p>
      <p className='mol-info__info'>
        Molar Mass: {molecule.info.molarmass}<br />
        Classification: {molecule.info.classification} <br/>
        {/* Atoms: Carbon: {molecule.info.atoms.carbon}, 
        Hydrogen: {molecule.info.atoms.hydrogen} */}
      </p>

      
    </div>
  );
}