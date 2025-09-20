import { useState, useEffect } from 'react';

export interface StudentData {
  name: string;
  studentCode: string;
  bannerId: string;
  career: string;
  campus: string;
  profileImage?: string;
}

const DEFAULT_DATA: StudentData = {
  name: "Ingresar Nombre",
  studentCode: "202191xxx",
  bannerId: "N01182xxx",
  career: "Ciencias de la Computación",
  campus: "Campus San Miguel",
  profileImage: undefined
};

const STORAGE_KEY = 'tiu-virtual-data';

export const useStudentData = () => {
  const [data, setData] = useState<StudentData>(DEFAULT_DATA);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  const updateData = (newData: Partial<StudentData>) => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  const updateField = (field: keyof StudentData, value: string) => {
    updateData({ [field]: value });
  };

  return {
    data,
    updateData,
    updateField
  };
};