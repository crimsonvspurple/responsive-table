import {cpu9 as cpu } from "./data";

export function printCpu() {
  // noinspection SpellCheckingInspection
  cpu.forEach(({Clockspeed, Cores, Name, Price, Release, TDP, Threads, Turbospeed}) => {
    const content = document.createElement('div');
    content.className = 'rowGroup';
    content.id = 'rowGroup' + Math.floor(Math.random() * 10000);
    document.getElementById('grid').appendChild(content);
    simpleCell(Name, content.id);
    simpleCell(Cores, content.id);
    simpleCell(Threads, content.id);
    simpleCell(Clockspeed, content.id);
    simpleCell(Turbospeed, content.id);
    simpleCell(TDP, content.id);
    simpleCell(Release, content.id);
    simpleCell(Price, content.id);
  });
}

export function simpleCell(value, id) {
  const cell = document.createElement('div');
  cell.innerText = value;
  document.getElementById(id).appendChild(cell);
}

printCpu();

export default printCpu;
