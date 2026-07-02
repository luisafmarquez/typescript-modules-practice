import { setupForm } from "./form.js"; // Hämtar formulär-starten
import { renderTasks } from "./render.js"; // Hämtar render-funktionen
import { loadTasks } from "./storage.js"; // Hämtar sparade tasks
import { setTasks } from "./tasks.js"; // Hämtar funktion för att lägga in sparade tasks

const title = document.querySelector("#title") as HTMLHeadingElement; // Hämtar rubriken

title.textContent = "Mina Tasks"; // Ändrar rubriken så appen känns mer egen

const savedTasks = loadTasks(); // Läser tasks från localStorage när appen startar

setTasks(savedTasks); // Lägger in sparade tasks i arrayen

setupForm(); // Startar formuläret

renderTasks(); // Visar tasks direkt när sidan öppnas