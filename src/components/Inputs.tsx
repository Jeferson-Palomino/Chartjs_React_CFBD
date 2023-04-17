import React, { useEffect, useState } from 'react';
import { filtrar } from "../service/pocketbase-service";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker, { date } from 'faker';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


export default function Inputs() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleInputChange = (event: any) => {
    setStartDate(event.target.value);

  };

  const handleInputendDate = (event: any) => {
    setEndDate(event.target.value);
  };


  interface Item {
    emergency_time: string;
  }

  const [cantidad, setCantidad] = useState<never[]>([]);
  const [posts, setPosts] = useState<any>([]);

  const valores = async () => {
    const valor = await filtrar(startDate, endDate);
    console.log(valor);
    setPosts(valor);
    let contador = posts.items.reduce((acc: { [key: string]: number }, item: Item) => {
      const date = item.emergency_time.slice(0, 10);
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
    setCantidad(contador);

  };
  const labels = Object.keys(cantidad);

  const data = {
    labels,
    datasets: [
      {
        label: 'Cantidad de emergencia',
        data: Object.values(cantidad),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  useEffect(() => {
    valores();
  }, [startDate, endDate]);

  return (
    <><div>
      <label htmlFor="start-date-input">Fecha de inicio:</label>
      <input type="date" value={startDate} onChange={handleInputChange} />

      <label htmlFor="end-date-input">Fecha de fin:</label>
      <input type="date" value={endDate} onChange={handleInputendDate} />

      <button onClick={valores}>Haz clic aquí</button>

    </div><Bar options={options} data={data} /></>
  );
}

