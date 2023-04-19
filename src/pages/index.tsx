import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@mui/material/Container';
import Layout from '@/layout/funnel';
import { locales } from '@/const';
import style from "@/styles/Home.module.css";
import Link from 'next/link';
import {Typography} from "@mui/material";


export default function Home() {


  return (
    <>
       <Head>
        <title>StudyPug</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.main}>
                {locales.map((locale:string,index:number) => {
                  return (
                    <Link href={`/signup/${locale}/?role=parent`} key={index}>
                          <div className={style.description}>
                            <Typography sx={{width:250}}>{`signup/${locale.toUpperCase()}`}</Typography>
                </div>
                        </Link>
                    );
                })}
          </div>
    </>
  )
}
