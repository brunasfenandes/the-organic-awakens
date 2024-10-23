import React, { useState, useEffect } from 'react';
import { MolViewer } from 'react-molviewer';
import axios from 'axios';
import './MolViewerPage.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function MolViewerPage() {
  // const [molContent, setMolContent] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null); 

  // const fetchDefaultMolecule = async () => {
  //   try {
  //     const { data } = await axios.get('/mol/benzene.mol');
  //     setMolContent(data); 
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching the default molecule:', error);
  //     setError('Failed to load molecule data.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchDefaultMolecule();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (

    <>
      <div className='main'>
        <div className='molviewer'>
          <div className='molviewer__placeholder'>
            {/* <MolViewer
              width={600}
              height={400}
              molContent={molContent}
              viewType="mol"
              style={{ border: '1px solid #ccc' }}
            /> */}
            <p>react-molviewer / JSmol</p>
          </div>

          <div className='molviewer__content'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
