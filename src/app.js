/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(frase) {
  //write your code here
  let quien = [
    "La abuela ",
    "El dragón ",
    "Un payaso ",
    "Un amigo ",
    "El unicornio ",
    "La profesora "
  ];
  let accion = [
    "rompió la realidad ",
    "saltó a un volcan ",
    "se fué al espació ",
    "conquistó un planeta ",
    "subió el everest ",
    "corrió una maratón ",
    "cazó un rayo "
  ];
  let que = [
    "con mi telefono ",
    "con un palo ",
    "en calzones ",
    "sobre una alfombra ",
    "con un gato llamado Julián ",
    "en la web "
  ];
  let cuando = [
    "por la mañana.",
    "al desayuno.",
    "al almuerzo,",
    "antes de acostarse.",
    "en la fiesta.",
    "en la reunión."
  ];
  let a = Math.floor(Math.random() * quien.length);
  let b = Math.floor(Math.random() * accion.length);
  let c = Math.floor(Math.random() * que.length);
  let d = Math.floor(Math.random() * cuando.length);
  let aa = quien[a];
  let bb = accion[b];
  let cc = que[c];
  let dd = cuando[d];
  frase = aa + bb + cc + dd;
  document.getElementById("excusa").innerHTML = frase;
  return frase;
};
