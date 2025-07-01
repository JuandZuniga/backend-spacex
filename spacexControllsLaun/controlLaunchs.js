import { dynamoDB } from '../configures/configureAWS.js';

export const obtainAllLaunches = async (req, res) => {
  try {
    const reference = { TableName:'Launches_SpaceX'};
    const data = await dynamoDB.scan(reference).promise();
    res.json(data.Items);
  } catch (error) {
    console.error('Fallo al intentar obtener los datos de lanzamientos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const obtainLaunchRecap = async (req, res) => {
  try {
    const reference = { TableName:'Launches_SpaceX'};
    const data = await dynamoDB.scan(reference).promise();

    const summary = {
      success: data.Items.filter(item => item.launch_status === 'success').length,
      failed: data.Items.filter(item => item.launch_status === 'failed').length,
      upcoming: data.Items.filter(item => item.launch_status === 'upcoming').length,
    };

    res.json(summary);
  } catch (error) {
    console.error('Fallo al intentar obtener los datos de resumen.:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
