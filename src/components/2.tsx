import { motion } from "framer-motion";
import { image, imageWrapper } from "variants";
import { useState, useEffect } from "react";
import Card from "./Card";
import image2 from "./images/image2.jpg"
import {
  Tooltip,
} from 'react-tippy';

import 'react-tippy/dist/tippy.css';


export default function Second() {

    const [chapter, setChapter] = useState("Please Select Chapter")
    
    const [data, setData] = useState([{}])

    const [verse, setVerse] = useState("")
    
    const [api, setApi] = useState([])


    useEffect(() => {
        getData()
        async function getData(){
          const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`;
          const result = await fetch(url, {
            "method": "GET",
            "headers": {
              'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
              'X-RapidAPI-Key': 'a6cc0b0894mshe09d3ef836f5323p120ac3jsn237217fed002'
            }
          })
          const getResult = await result.json();
          setData(getResult);
          console.log(getResult)
        }
      }, [chapter])

      useEffect(() => {
        getApi()
        async function getApi(){
          const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;
          const result = await fetch(url, {
            "method": "GET",
            "headers": {
              'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
              'X-RapidAPI-Key': 'a6cc0b0894mshe09d3ef836f5323p120ac3jsn237217fed002'
            }
          })
          const getResult2 = await result.json();
          setApi(getResult2);
          console.log(getResult2)
          
        }
      }, [verse])

      const length = data.length;

      
      return (
  
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block" />readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <div className="">
                    <select 

                     value={chapter}
                     onChange={(event) => {
                         setChapter(event.target.value)
                     }}

                    className="inline-flex text-white bg-[#266867] border-0 py-2 px-6 focus:outline-none hover:bg-[#266867] rounded text-lg" >
                        <option value="Please Select Chapter">Choose Chapter</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>  
                    </select>                    
                </div>
                <div className=" ml-2 h-15 flex justify-center items-center bg-[#f8bc24]">
                  <label className='relative cursor-pointer'>
                    <input 
                    value={verse}
                    onChange={(event) => {
                        setVerse(event.target.value)
                    }}
                    type="text" placeholder="Input" className='h-15 w-56 px-6 text-2xl text-white bg-[#f8bc24] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-[#266867] placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                    <span className='text-xl text-white text-opacity-80 bg-[#f8bc24] absolute left-5 top-1.5 px-1 transition duration-200 input-text'>Input</span>
                  </label>
                </div>
                { chapter === "Please Select Chapter" ? "" : <h1>there are  {length} verses in chapter {chapter}</h1>}
              </div>
            </div>
              <div>
                {/* {api} */}
              </div>
            <motion.div className="imageWrapper" variants={imageWrapper} initial="initial" animate="animate" >
              <motion.img  src="/images/image2.jpg" className="image"  variants={image}  />
            </motion.div>
          </div>
            <Tooltip 
              title=" मैं तो बस निमित्त मात्र हूँ "
              position="top"
              trigger="mouseenter"
              arrow="true"
              arrowSize="regular"
              animation="shift"
              duration="1000" 
              >
              <div className="flex flex-col items-center justify-center">
                <img className="inline-block h-40 w-40 mb-5 rounded-full ring-2 ring-offset-base-100 ring-offset-2 ring-white" src="/images/end.jpg" />
              </div>
            </Tooltip>
          
        </section>
      );
    }