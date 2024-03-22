import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import List from "./List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myimage from '/Users/ASUS/PracticingReact/13PracticeProject/vite-project/src/assets/image-avatar.jpg'
export default function Header() {
    return (
      <div className="w-[80%] mx-32">
        <nav className="w-full mx-4 flex justify-between">
          <ul className="flex ">
             <li className="text-2xl p-4"><h1>Sneakers</h1></li>
               <List listitems={"Collection"} />
               <List listitems={"Men"}/>
               <List listitems={"Women"}/>
               <List listitems={"About"}/>
               <List listitems={"Contact"}/>
        </ul>
        <ul className="flex mx-8">
        <li><FontAwesomeIcon icon={faShoppingCart} className="text-2xl p-5"/></li>
        <li className="h-10 w-10 rounded-full my-3"><img src={myimage} alt="Profile" className=""/></li>
        </ul>
        </nav>
        <hr />
      </div>
    )
  }