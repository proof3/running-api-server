import {data} from '../../../running_data/data.js';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const new_data = {pace: req.body.pace, cadence: req.body.cadence, distance: req.body.distance};
    data.push(new_data);
    res.status(201).json(data);
  }
}
