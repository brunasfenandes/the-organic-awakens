import React, { useState, useEffect } from 'react';
import { MolViewer } from 'react-molviewer';
import axios from 'axios';
import './MolViewerPage.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

const benzene = `7413
  -OEChem-10142412363D

 21 21  0     0  0  0  0  0  0999 V2000
    2.5719   -0.7305    0.7293 O   0  0  0  0  0  0  0  0  0  0  0  0
    2.1960    0.7867   -0.9297 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.3472   -0.0588    0.3799 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.3799    1.2679    0.1501 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.3173   -1.2022   -0.3901 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.8688    1.1577    0.4679 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.8064   -1.3066   -0.0713 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.5264    0.0181   -0.3045 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.7838    0.0677   -0.0317 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.3149   -0.2741    1.4566 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.2654    1.5906   -0.8931 H   0  0  0  0  0  0  0  0  0  0  0  0
    0.0699    2.0551    0.7676 H   0  0  0  0  0  0  0  0  0  0  0  0
    0.1746   -2.1529   -0.1504 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1865   -1.0523   -1.4700 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.3682    2.1029    0.2270 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.0003    0.9926    1.5444 H   0  0  0  0  0  0  0  0  0  0  0  0
   -1.9344   -1.6123    0.9744 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.2619   -2.0879   -0.6902 H   0  0  0  0  0  0  0  0  0  0  0  0
   -3.5758   -0.0744   -0.0031 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.5208    0.2527   -1.3761 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.5167   -0.6631    0.4741 H   0  0  0  0  0  0  0  0  0  0  0  0
  1  9  1  0  0  0  0
  1 21  1  0  0  0  0
  2  9  2  0  0  0  0
  3  4  1  0  0  0  0
  3  5  1  0  0  0  0
  3  9  1  0  0  0  0
  3 10  1  0  0  0  0
  4  6  1  0  0  0  0
  4 11  1  0  0  0  0
  4 12  1  0  0  0  0
  5  7  1  0  0  0  0
  5 13  1  0  0  0  0
  5 14  1  0  0  0  0
  6  8  1  0  0  0  0
  6 15  1  0  0  0  0
  6 16  1  0  0  0  0
  7  8  1  0  0  0  0
  7 17  1  0  0  0  0
  7 18  1  0  0  0  0
  8 19  1  0  0  0  0
  8 20  1  0  0  0  0
M  END
> <PUBCHEM_COMPOUND_CID>
7413

> <PUBCHEM_CONFORMER_RMSD>
0.4

> <PUBCHEM_CONFORMER_DIVERSEORDER>
1
16
8
17
2
15
6
12
7
10
3
5
14
9
4
13
11

> <PUBCHEM_MMFF94_PARTIAL_CHARGES>
5
1 -0.65
2 -0.57
21 0.5
3 0.06
9 0.66

> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>
2.2

> <PUBCHEM_PHARMACOPHORE_FEATURES>
4
1 1 acceptor
1 2 acceptor
3 1 2 9 anion
6 3 4 5 6 7 8 rings

> <PUBCHEM_HEAVY_ATOM_COUNT>
9

> <PUBCHEM_ATOM_DEF_STEREO_COUNT>
0

> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>
0

> <PUBCHEM_BOND_DEF_STEREO_COUNT>
0

> <PUBCHEM_BOND_UDEF_STEREO_COUNT>
0

> <PUBCHEM_ISOTOPIC_ATOM_COUNT>
0

> <PUBCHEM_COMPONENT_COUNT>
1

> <PUBCHEM_CACTVS_TAUTO_COUNT>
1

> <PUBCHEM_CONFORMER_ID>
00001CF500000001

> <PUBCHEM_MMFF94_ENERGY>
5.3637

> <PUBCHEM_FEATURE_SELFOVERLAP>
20.353

> <PUBCHEM_SHAPE_FINGERPRINT>
10857977 72 18130495431289638707
12897270 3 18340774835299780764
15310529 11 17603587456258031349
16714656 1 18342742931259588725
16945 1 18273498974608055419
18185500 45 18335699485278115311
20645464 45 17346871260938486554
21040471 1 18199472064908153145
23235685 24 18342457002607682825
23552423 10 18334577910514544782
29004967 10 15267341825117690970
369184 2 18409442592055303105
5084963 1 18187639180794029449

> <PUBCHEM_SHAPE_MULTIPOLES>
173.48
3.52
1.42
0.79
0.88
0.03
0.03
0.07
0.06
-0.53
-0.01
0.23
-0.03
-0.36

> <PUBCHEM_SHAPE_SELFOVERLAP>
340.642

> <PUBCHEM_SHAPE_VOLUME>
102.7

> <PUBCHEM_COORDINATE_TYPE>
2
5
10

$$$$
`;

export default function MolViewerPage() {
  // const [molContent, setMolContent] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null); 

  // const fetchDefaultMolecule = async () => {
  //   try {
  //     const { data } = await axios.get('/molecules/benzene.mol');
  //     setMolContent(data); 
  //     // console.log(data);
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
              molContent="/mol/benzene.mol"
              viewType="file"
              style={{ border: '1px solid #ccc' }}
            /> */}

            <iframe frameborder="0" src="https://embed.molview.org/v1/?mode=balls&cid=244" className='molviewer__display'></iframe>
            {/* <p>react-molviewer / JSmol</p> */}
          </div>

          <div className='molviewer__content'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
