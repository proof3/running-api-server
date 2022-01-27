import Chart from 'chart.js/auto';
import {data} from '../../../running_data/data.js'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const new_data = req.body.ndata;
    data.push(new_data);
    res.status(201).json({data});
  }
}
