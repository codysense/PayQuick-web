import bg from "../images/department.jpg";


const background = {
backgroundImage: `url(${bg})`,
backgroundSize: "cover",
opacity: 1,
backgroundColor: "#292929",
backgroundBlendMode: "overlay",
}

export function getBackground(){
    return background
}