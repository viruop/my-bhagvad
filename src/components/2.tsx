import { motion } from "framer-motion";
import { image, imageWrapper } from "variants";
import { useState, useEffect } from "react";
// import { getSortedRoutes } from "next/dist/shared/lib/router/utils";
import { Loader } from 'rsuite';
import ReactTooltip from "react-tooltip";


export default function Second() {
 // chapter update karne ke liye
    const [chapter, setChapter] = useState("Please Select Chapter")
   // frist api call to recieve chapter number 
    const [data, setData] = useState([{}])
  // verse select karne ke liye
    const [verse, setVerse] = useState("")
    // second api call 
    const [api, setApi] = useState([])
// to get chapter and verse number 
    const [slug, setSlug] = useState([])
// to get english translation
    const [translation, setTranslation] = useState("") 
// doesn't work :(
    const [isloading, setIsloading] = useState(false)
// to disable input feild before selecting chapter
    const [isDisabled, setIsDisabled] = useState(true);
 
    // to disable input 

    const handleClick = () => {
      chapter === "Please Select Chapter"? isDisabled : setIsDisabled(!isDisabled)
    };
   
// shows how many verse present in the chapter 
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
          setData(getResult)
          //console.log(getResult)
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
          setIsloading(true)
         
        console.log(getResult2)
        setApi(getResult2.text)
        setSlug(getResult2.slug)
        getResult2.translations ? setTranslation(getResult2.translations[0].description) : '';
        
        
        }
      }, [chapter,verse])

      const length = data.length;
      
      return (
  
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> I am the beginning, middle, and  
                <br className="hidden lg:inline-block" />end of creation
              </h1>
              <p className="mb-8 leading-relaxed">Bhagavad Gita, also known as the Gita - &quot;The Song of God&quot; is a practical guide to one&apos;s life that guides one to re-organise their life, achieve inner peace and approach the Supreme (the Ultimate Reality). The Bhagavad Gita consists of 701 verses by Lord Krishna. It is the dialogues between Pandav Prince Arjuna and Lord Krishna during the Kurukshetra war also known as Mahabharata.</p>
              <div className="flex justify-center">
                <div className="">
                    <select 
                     value={chapter}
                     onChange={(event) => {
                         setChapter(event.target.value)
                     }}
                     onClick={handleClick}

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
                    disabled={isDisabled}
                    type="text" placeholder="Verse" className='h-15 w-56 px-6 text-2xl text-white bg-[#f8bc24] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-[#266867] placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                    <span className='text-xl text-white text-opacity-80 bg-[#f8bc24] absolute left-5 top-1.5 px-1 transition duration-200 input-text'>Verse</span>
                  </label>
                </div>
              </div>
              { chapter === "Please Select Chapter" ? "" : <h1>there are  {length} verses in chapter {chapter}</h1>}
            </div>
              <motion.div className="imageWrapper" variants={imageWrapper} initial="initial" animate="animate" >
              <motion.img  src="/images/image2.png" className="image"  variants={image}  />
            </motion.div>
          </div>
              <div>
                {slug ? <h1> {slug} </h1> : ""}
                {api ? <h2> {api} </h2> : ""}
                {isloading ? translation : <Loader content="Loading..."  />}              
              </div>  
              <ReactTooltip 
              id='custom-color' className='custom-color' place='top' border
              textColor='#FDFCFB' backgroundColor='#266867' borderColor='darkgreen' arrowColor='#f8bc24'
              > <strong> मैं तो बस निमित्त मात्र हूँ</strong></ReactTooltip>
                <div className="flex flex-col items-center justify-center" data-for='custom-color' data-tip='That is one weird arrow (and a border)!' >
                  <img  className="inline-block h-40 w-40 mb-5 rounded-full ring-2 ring-offset-base-100 ring-offset-2 ring-white" src="/images/end.jpg" />
                  
                
              </div>
              
          
        </section>
      );
    }
     
