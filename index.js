"use strict";

const container = document.querySelector(".container");
const text = document.querySelector(".text");

const userName = prompt(
  "Familiyangizni birinchi harfi va ismingizni yozing. \n Yozish formati: h.murodjon \nEslatma: kichik harflarda bo'sh joy qoldirmasdan va nuqta bilan ajratib yozing 😁"
);

if (String(userName?.toLowerCase()) === "j.sevinch") {
  alert(`Sizga bitta maslahat bermoqchiman, bu hikoyani o'qib bo'lgach ikkita kinoni ko'rishni tavsiya etaman:
          1 - Toki hayot ekanman
          2 - Titanik
Bu kinolarni yozgan hikoyamga hech qanday ta'luqli joyi yo'q shunchaki o'zim ko'rib shu kinolarni yoqtirib qoldim...`);

  container.classList.remove("d-n");
} else {
  text.classList.remove("d-n");
}
