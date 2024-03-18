import { useState } from "react";
import List from "./Components/Header/List";
import myimage from "/Users/ASUS/PracticingReact/13PracticeProject/vite-project/src/assets/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import firstimg from "/Users/ASUS/PracticingReact/13PracticeProject/vite-project/src/assets/image-product-1.jpg";
import secondimg from "/Users/ASUS/PracticingReact/13PracticeProject/vite-project/src/assets/image-product-2.jpg";
import thirdimg from "/Users/ASUS/PracticingReact/13PracticeProject/vite-project/src/assets/image-product-3.jpg";
import fourthimg from "/Users/ASUS/PracticingReact/13PracticeProject/vite-project/src/assets/image-product-4.jpg";
function App() {
  const [input, setinput] = useState(1);
  const [cart, setcart] = useState(0);

  const increasecartvalue = () => {
    if (cart >= 0) {
      setcart(1);
    }
  };

  const increaseinput = () => {
    if (input >= 10) {
      setinput(10);
      alert("max quantity");
    } else {
      setinput(input + 1);
    }
  };
  const decreaseinput = () => {
    if (input <= 1) {
      setinput(0);
      setcart(0);
    } else {
      setinput(input - 1);
    }
  };

  const Changebgone = () => {
    let product = document.getElementById("productImage");
    let firstimage = document.getElementById("firstimg");
    firstimage.style.opacity = 0.5;
    firstimage.style.border = "2px solid black";

    let secondimage = document.getElementById("secondimg");
    secondimage.style.opacity = 1;
    secondimage.style.border = "none";

    let thirdimage = document.getElementById("thirdimg");
    thirdimage.style.opacity = 1;
    thirdimage.style.border = "none";

    let fourthimage = document.getElementById("fourthimg");
    fourthimage.style.opacity = 1;
    fourthimage.style.border = "none";
    if (product.hasAttribute("src")) {
      product.setAttribute("src", `${firstimg}`);
    }
  };
  const Changebgtwo = () => {
    let product = document.getElementById("productImage");
    let firstimage = document.getElementById("firstimg");
    firstimage.style.opacity = 1;
    firstimage.style.border = "none";

    let secondimage = document.getElementById("secondimg");
    secondimage.style.opacity = 0.5;
    secondimage.style.border = "2px solid black";

    let thirdimage = document.getElementById("thirdimg");
    thirdimage.style.opacity = 1;
    thirdimage.style.border = "none";

    let fourthimage = document.getElementById("fourthimg");
    fourthimage.style.opacity = 1;
    fourthimage.style.border = "none";
    if (product.hasAttribute("src")) {
      product.setAttribute("src", `${secondimg}`);
    }
  };
  const Changebgthree = () => {
    let product = document.getElementById("productImage");
    let firstimage = document.getElementById("firstimg");
    firstimage.style.opacity = 1;
    firstimage.style.border = "none";

    let secondimage = document.getElementById("secondimg");
    secondimage.style.opacity = 1;
    secondimage.style.border = "none";

    let thirdimage = document.getElementById("thirdimg");
    thirdimage.style.opacity = 0.5;
    thirdimage.style.border = "2px solid black";

    let fourthimage = document.getElementById("fourthimg");
    fourthimage.style.opacity = 1;
    fourthimage.style.border = "none";
    if (product.hasAttribute("src")) {
      product.setAttribute("src", `${thirdimg}`);
    }
  };
  const Changebgfour = () => {
    let product = document.getElementById("productImage");
    let firstimage = document.getElementById("firstimg");
    firstimage.style.opacity = 1;
    firstimage.style.border = "none";

    let secondimage = document.getElementById("secondimg");
    secondimage.style.opacity = 1;
    secondimage.style.border = "none";

    let thirdimage = document.getElementById("thirdimg");
    thirdimage.style.opacity = 1;
    thirdimage.style.border = "none";

    let fourthimage = document.getElementById("fourthimg");
    fourthimage.style.opacity = 0.5;
    fourthimage.style.border = "2px solid black";
    if (product.hasAttribute("src")) {
      product.setAttribute("src", `${fourthimg}`);
    }
  };
  return (
    <>
      <div className="w-full ">
        <div className="w-[80%] mx-32">
          <nav className="w-full mx-4 flex justify-between">
            <ul className="flex ">
              <li className="text-2xl p-4">
                <h1>Sneakers</h1>
              </li>
              <List listitems={"Collection"} />
              <List listitems={"Men"} />
              <List listitems={"Women"} />
              <List listitems={"About"} />
              <List listitems={"Contact"} />
            </ul>
            <ul className="flex mx-8">
              <li>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-2xl p-5 relative left-10"
                />
                <input
                  type="number"
                  value={cart}
                  className="relative  bottom-10 h-4 w-10"
                  
                />
              </li>
              <li className="h-10 w-10 rounded-full my-3">
                <img src={myimage} alt="Profile" className="" />
              </li>
            </ul>
          </nav>
          <hr />
        </div>

        <div className="w-80% ml-40 mt-20 ">
          {" "}
          {/* Div including content of the Page */}
          <div className="h-1/3 w-1/3 border-2-black ">
            <img
              src={firstimg}
              alt="Shoes"
              className="rounded-xl"
              id="productImage"
            />
          </div>
          <div className="flex mt-2 p-2">
            <div className="w-20 h-20 ml-1">
              <img
                src={firstimg}
                alt="Shoes"
                className="rounded-md"
                onClick={Changebgone}
                id="firstimg"
              />
            </div>
            <div className="w-20 h-20 ml-7">
              <img
                src={secondimg}
                alt="Shoes on rock"
                className=" rounded-md hover:cursor-pointer"
                onClick={Changebgtwo}
                id="secondimg"
              />
            </div>
            <div className="w-20 h-20 ml-8">
              <img
                src={thirdimg}
                alt="Right shoe"
                className=" rounded-md"
                onClick={Changebgthree}
                id="thirdimg"
              />
            </div>
            <div className="w-20 h-20 ml-8">
              <img
                src={fourthimg}
                alt="Left shoe"
                className="rounded-md"
                onClick={Changebgfour}
                id="fourthimg"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-[35%] flex flex-col">
          <h1 className="text-2xl text-orange-500 opacity-60">
            Sneaker Company
          </h1>
          <h2 className="text-5xl text-black font-bold w-3/4 mt-2">
            Fall Limited Edition Sneakers
          </h2>
          <p className="w-2/3 mt-4 opacity-60">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the weather can offer
          </p>

          <div className="relative top-10">
            <span className="flex">
              <h3 className="text-2xl">$125.00</h3>
              <span className="bg-orange-400 font-serif text-xl w-12 bg-opacity-50 text-center font-bold text-orange-500 ml-3">
                50%
              </span>
            </span>
            <h5 className="opacity-40 line-through">$250.00</h5>
          </div>

          {/* Add to cart section */}

          <div className="flex">
            <div className="relative top-16 border-2 border-black w-fit h-fit box-border flex">
              <button
                className="text-4xl relative bottom-2 text-orange-400"
                onClick={decreaseinput}
              >
                -
              </button>
              <input
                type="number"
                readOnly
                value={input}
                className="text-3xl relative ml-7 top-.5 box-border border-0 w-12 h-fit"
              />
              <button
                className="text-4xl relative right-1 bottom-1 text-orange-400"
                onClick={increaseinput}
              >
                +
              </button>
            </div>
            <div className="flex relative top-16 left-5">
              <button
                className="bg-orange-500 bg-opacity-60 w-52 h-10 text-md text-white font-bold"
                onClick={increasecartvalue}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
