// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { iEmailSignUpFormat, iBillFormat } from '@/types';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';





export const handleEmailApi = async (URL: string, formData: iEmailSignUpFormat) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response: AxiosResponse = await axios.post(URL, formData, { headers });
    // Handle the successful response
    console.log('Response:', response.data.apikey);
    console.log('Response:', response.status);
    return {
      data: response.data
      , status: response.status
    };
  } catch (error) {
    // Handle errors
    console.log('Error:', error);

    if (axios.isAxiosError(error)) {
      // Axios specific error
      const axiosError: AxiosError = error;
      console.log('Axios error:', axiosError.status);
      console.log('Axios error:', axiosError.message)
      return {
        status: axiosError.response?.status,
        text: axiosError.response?.data
      }
    } else {
      // Generic error
      const genericError: Error = error as Error;
      console.log('Error:', genericError.message);
      return genericError.message;
    }
  }
}


export const handleAuthApi = async (URL: string, formData: any) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response: AxiosResponse = await axios.post(URL, formData, { headers });
    // Handle the successful response
    console.log('Response:', response.data.apikey);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    // Handle errors
    console.log('Error:', error);
    if (axios.isAxiosError(error)) {
      // Axios specific error
      const axiosError: AxiosError = error;
      console.log('Axios error:', axiosError.response);
      console.log('Axios error:', axiosError.message);
      return {
        data:axiosError.response
      }
    } else {
      // Generic error
      const genericError: Error = error as Error;
      console.log('Error:', genericError.message);

      return{
        data: genericError.message}
    }
  }
}


export const handlePayment = async (URL: string, formData: iBillFormat, apiKey: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    };
    const response: AxiosResponse = await axios.post(URL, formData, { headers });
    // Handle the successful response
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      // Axios specific error
      const axiosError: AxiosError = error;
      console.log('Axios error:', axiosError.response);
      return axiosError.response;
    } else {
      // Generic error
      const genericError: Error = error as Error;
      console.log('Error:', genericError.message);
      return genericError.message;
    }
  }
}

