
import axios from 'axios';
import { PlanList } from '@/types/plans.types';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getPlansData = async (): Promise<PlanList> => {
  try {
    const response = await axios.get<PlanList>(`${apiURL}/plans.json`);
    return response.data;
  } catch (error) {
    console.error('Error in getPlansData:', error);
    throw new Error('Failed to obtain plans data');
  }
};
