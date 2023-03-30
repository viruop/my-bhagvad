import { motion } from "framer-motion";
import { image, imageWrapper } from "variants";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

export default function Second() {
  // chapter update karne ke liye
  const [chapter, setChapter] = useState("Please Select Chapter");
  // frist api call to recieve chapter number
  const [data, setData] = useState([{}]);
  // verse select karne ke liye
  const [verse, setVerse] = useState("");
  // second api call
  const [api, setApi] = useState([]);
  // to get chapter and verse number
  const [slug, setSlug] = useState([]);
  // to get english translation
  const [translation, setTranslation] = useState("");
  // to get hindi translation
  const [hindi, setHindi] = useState("");
  // verse options
  const [options, setOptions] = useState([]);

  // shows how many verse present in the chapter
  useEffect(() => {
    getData();
    async function getData() {
      const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`;
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
          "X-RapidAPI-Key":
            "a6cc0b0894mshe09d3ef836f5323p120ac3jsn237217fed002",
        },
      });
      const getResult = await result.json();
      setData(getResult);
      console.log(getResult.length);
      let optionstag = [];
      for (let i = 0; i < getResult.length; i++) {
        let option = (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        );
        optionstag.push(option);
      }
      setOptions(optionstag);
    }
  }, [chapter]);

  useEffect(() => {
    getApi();
    async function getApi() {
      const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
          "X-RapidAPI-Key":
            "a6cc0b0894mshe09d3ef836f5323p120ac3jsn237217fed002",
        },
      });
      const getResult2 = await result.json();

      setApi(getResult2.text);
      setSlug(getResult2.slug);
      getResult2.translations
        ? setTranslation(getResult2.translations[0].description)
        : "";
      getResult2.translations
        ? setHindi(getResult2.translations[6].description)
        : "";
    }
  }, [chapter, verse]);

  const length = data.length;

  return (
    <section className="text-gray-600 body-font -mt-5 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="pl-10 pr-0 sm:px-2 lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-8 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {" "}
            I am the beginning, middle, and
            <br className="hidden lg:inline-block" /> end of creation
          </h1>
          <p className="mb-8 leading-relaxed">
            Bhagavad Gita, also known as the Gita - &quot;The Song of God&quot;
            is a practical guide to one&apos;s life that guides one to
            re-organise their life, achieve inner peace and approach the Supreme
            (the Ultimate Reality). The Bhagavad Gita consists of 701 verses by
            Lord Krishna. It is the dialogues between Pandav Prince Arjuna and
            Lord Krishna during the Kurukshetra war also known as Mahabharata.
          </p>
          <div className="p-8 md:p-0 m-1">
            <div className="flex justify-center">
              <div className="">
                <select
                  value={chapter}
                  onChange={(event) => {
                    setChapter(event.target.value);
                  }}
                  className="inline-flex text-white bg-[#266867] border-0 py-2 px-6 focus:outline-none hover:bg-[#266867] rounded text-lg w-auto cursor-pointer"
                >
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
              <div className=" flex justify-center items-center bg-[#f8bc24]">
                <label className="relative">
                  {options.length > 0 ? (
                    <select
                      value={verse}
                      onChange={(event) => {
                        setVerse(event.target.value);
                      }}
                      className="ml-2  h-15 w-auto px-6 text-2xl text-white bg-[#f8bc24] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-[#266867] placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    >
                      <option selected>Select Verse </option>
                      {options}
                    </select>
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </div>
          </div>

          {chapter === "Please Select Chapter" ? (
            <h1> First Select Chapter , Then Verse/Shlok</h1>
          ) : (
            <h1>
              {" "}
              there are {length} verses in chapter {chapter}
            </h1>
          )}
        </div>
        <motion.div
          className="imageWrapper"
          variants={imageWrapper}
          initial="initial"
          animate="animate"
        >
          <motion.img
            src="/images/image2.png"
            className="image"
            variants={image}
          />
        </motion.div>
      </div>
      {translation ? (
        <div className="flex justify-center items-center flex-col lg:items-center drop-shadow-2xl bg-[#f8d732] w-auto h-auto pr-5 pl-4 pt-5 pb-5 ml-8 mb-8 mt-4 -mr-2 rounded-lg md:m-8 hover:bg-[#ffd500] transition duration-500 hover:scale-105">
          {slug ? (
            <h1 className="underline underline-offset-4 mb-4 text-xl ">
              {" "}
              {slug}{" "}
            </h1>
          ) : (
            ""
          )}
          {api ? (
            <div className=" mb-4 text-xl">
              {" "}
              <h2> {api} </h2>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col items-center justify-center lg:items-start">
            {translation ? (
              <p className=" mt-2 mb-4 text-lg">
                {" "}
                English Translation{" "}
                <span className=" text-base">
                  {" "}
                  <br /> {translation}
                </span>{" "}
              </p>
            ) : (
              ""
            )}
            {hindi ? (
              <p className="  mt-2  text-lg">
                {" "}
                Hindi Translation{" "}
                <span className=" text-base">
                  {" "}
                  <br /> {hindi}
                </span>{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <ReactTooltip
        id="custom-color"
        className="custom-color"
        place="top"
        border
        textColor="#FDFCFB"
        backgroundColor="#266867"
        borderColor="darkgreen"
        arrowColor="#f8bc24"
      >
        {" "}
        <strong> मैं तो बस निमित्त मात्र हूँ 🙏</strong>
      </ReactTooltip>
      <div className="flex flex-col items-center justify-center">
        <img
          className="inline-block h-40 w-40 mb-3 ml-2 rounded-full ring-2 ring-offset-base-100 ring-offset-2 ring-white"
          src="/images/me.jpg"
          data-for="custom-color"
          data-tip="That is one weird arrow (and a border)!"
        />
      </div>
      <footer className=" flex justify-center mt-0 p-2">
        <div className="flex gap-x-2 items-center justify-center ">
          <a href="https://github.com/viruop">
            <svg
              className=" hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/_viru_7/">
            <svg
              className=" hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/viraj-rai-7b9249230/">
            <svg
              className=" hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
}
