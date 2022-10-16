//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

const UseStateCounter = () => {
  return (
    <div className="container text-center mt-4">
      <h1>USESTATE HOOK</h1>
      <h2 className="display-4 text-danger">COUNT:</h2>
      <button className="btn btn-success">INC</button>

      <button className="btn btn-danger">DEC</button>
    </div>
  );
};

export default UseStateCounter;

//* useState en cok kullanilan Hook'tur.
//* Bir state'in degisken, dizi ve obje ile kullanilabilmesine olanak saglar.
//? useState hook'u bir dizi dondurur.Bu dizi array dest ile acilabilir.
//?  Acilan dizinin 1.elemani state degiskenidir.
//?  2.si ise state'i degistirmeye izin veren bir setter metodudur.
//? useState parametre olarak state'in ilk degerini alir.

//? bu şekilde bir atama ile sayısal değer state'in üzerine yazılmış oldu.
//? dolayısıyla object yapısı bozuldu
// setPerson(person.age +1);
// setPerson({ name: "Ahmet", surname: "Can", age: 44 });
