import {cpu9 as cpu } from "./data";

export function printCpu() {
  cpu.forEach(({Clockspeed, Cores, Name, Price, Release, TDP, Threads, Turbospeed}) => {
    simpleCell(Name);
    simpleCell(Cores);
    simpleCell(Threads);
    simpleCell(Clockspeed);
    simpleCell(Turbospeed);
    simpleCell(TDP);
    simpleCell(Release);
    simpleCell(Price);
  });
}

export function simpleCell(value) {
  const cell = document.createElement('div');
  cell.innerText = value;
  document.getElementById("grid").appendChild(cell);
}

printCpu();

export default printCpu;
