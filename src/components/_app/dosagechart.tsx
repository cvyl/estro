'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
      average: 400,
      today: 240,
    },
    {
      average: 300,
      today: 139,
    },
    {
      average: 200,
      today: 980,
    },
    {
      average: 278,
      today: 390,
    },
    {
      average: 189,
      today: 480,
    },
    {
      average: 239,
      today: 380,
    },
    {
      average: 349,
      today: 430,
    },
  ];
  


export default function DosageComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dosage, setDosage] = useState(0);
  const [estrogenType, setEstrogenType] = useState('');
  const [dosageHistory, setDosageHistory] = useState([
    { date: new Date('2023-05-01'), dosage: 5, type: 'Estradiol Enanthate' },
    { date: new Date('2023-05-15'), dosage: 4, type: 'Estradiol Gel' },
    { date: new Date('2023-06-01'), dosage: 6, type: 'Estradiol Pills' },
    { date: new Date('2023-06-15'), dosage: 5, type: 'Estradiol Enanthate' },
    { date: new Date('2023-07-01'), dosage: 4, type: 'Estradiol Gel' },
  ]);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const handleDosageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDosage(parseFloat(e.target.value));
  };
  
  const handleEstrogenTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEstrogenType(e.target.value);
  };
  const handleLogDosage = () => {
    setDosageHistory([...dosageHistory, { date: selectedDate, dosage, type: estrogenType }]);
    setDosage(0);
    setEstrogenType('');
  };
  const chartData = dosageHistory.map((entry) => ({
    x: entry.date.toISOString().slice(0, 10),
    y: entry.dosage,
  }));
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-4">Log Dosage</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full text-left font-normal">
                     
                      <CalendarDaysIcon/>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="dosage">Dosage</Label>
                <Input id="dosage" type="number" step="0.1" value={dosage} onChange={handleDosageChange} />
              </div>
              <div>
                <Select value={estrogenType} onValueChange={() => handleEstrogenTypeChange}></Select>
                <Select value={estrogenType} onValueChange={() => handleEstrogenTypeChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Estradiol Enanthate">Estradiol Enanthate</SelectItem>
                    <SelectItem value="Estradiol Gel">Estradiol Gel</SelectItem>
                    <SelectItem value="Estradiol Pills">Estradiol Pills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleLogDosage}>Log Dosage</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-4">Dosage History</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dosageHistory.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.date.toLocaleDateString()}</TableCell>
                    <TableCell>{entry.dosage} mg</TableCell>
                    <TableCell>{entry.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex-1">
            <h2 className="text-lg font-bold mb-4">Dosage Over Time</h2>
            <div>
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 0,
                  
                  }}
                  >
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <Line
                type="monotone"
                strokeWidth={2}
                dataKey="average"
                activeDot={{
                  r: 6,
                  style: { fill: 'var(--theme-primary)', opacity: 0.25 },
                }}
                style={
                    {
                      stroke: 'var(--theme-primary)',
                    } as React.CSSProperties
                  }
              />
              <Line
                type="monotone"
                dataKey="today"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: 'var(--theme-primary)' },
                }}
                style={
                  {
                    stroke: 'var(--theme-primary)',
                  } as React.CSSProperties
                }
              />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}