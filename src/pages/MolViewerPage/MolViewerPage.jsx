import React, { useState, useEffect } from 'react';
import { MolViewer } from 'react-molviewer';
import axios from 'axios';
import './MolViewerPage.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import MolInfo from '../../components/MolInfo/MolInfo';
import arrowback from '../../assets/icons/arrow-back.svg'
import { useNavigate } from 'react-router-dom';


const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function MolViewerPage() {
  const [molecules, setMolecules] = useState([]);
  const [selectedMolecule, setSelectedMolecule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }; 

  const getMolecules = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/3dmol`);
      setMolecules(data); 
      console.log(data);
    } catch (error) {
      console.error('Error getting the default molecule:', error);
      setError('Failed to load molecule data.');
    }
    setLoading(false);
  };

  useEffect(() => {
    getMolecules();
  }, []);

  const handleMoleculeClick = (molecule) => {
    setSelectedMolecule(molecule);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (

    <>
      <div className='main'>
        <div className='molviewer'>
          <div className='molviewer__header'>
            <button className="button button--back">
              <img 
                src={arrowback}
                className="icon icon--back"
                alt="Arrow Back Icon"
                onClick={handleGoBack}
              />
            </button>
            <p className='molviewer__header--title'>3D Molecule Explorer</p>
          </div>

          <div className='molviewer__bot'>
            <div className='molviewer__placeholder'>

              {selectedMolecule ? (
                <iframe
                  frameborder="0" 
                  src={selectedMolecule.moleculeUrl}
                  title={selectedMolecule.iupacId}
                  className="molviewer__display"
                />
              ) : (
                <div className="molviewer__initial-state">
                  {/* You can use either a message or an image here */}
                  <p>Select a molecule to view its structure.</p>
                  {/* Or you can use an image */}
                  {/* <img src="/path/to/placeholder-image.jpg" alt="Select a molecule" /> */}
                </div>
              )}

              <div className='molviewer__instructions'>
                <p>INSTRUCTIONS: Use your mouse to rotate, scroll to zoom in and out, and explore the 3D structure of the molecule.</p>
              </div>

              <MolInfo
                molecule={selectedMolecule}
              />
            </div>

            <Sidebar
            molecules={molecules}
            onMoleculeClick={handleMoleculeClick} 
            />
          </div>
        </div>
      </div>
    </>
  );
}
