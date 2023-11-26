import { toast } from "react-toastify";
import { NOT_EKLE, NOT_SIL,  BASLANGIC_NOTLARI_GETIR } from "./actions";

export const s10chLocalStorageKey = "s10ch";


const baslangicDegerleri = {
  notlar:  [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  }
}

export function myReducer (state =baslangicNotlariniGetir(s10chLocalStorageKey) , action) {
    switch (action.type) {
        
      case NOT_EKLE :
        const id = toast.loading("Please wait...")
          //do something else
        toast.update(id, { render: "All is good", type: "success", isLoading: false });
        const newNot = {...state , notlar : [...state.notlar , action.payload]}
        localStorageStateYaz(s10chLocalStorageKey , newNot)
        return newNot;
        
        
      case NOT_SIL : {
        const remaningNotes = state.notlar.filter(item => item.id !== action.payload);
        const newState = {...state , notlar : remaningNotes};
        localStorageStateYaz(s10chLocalStorageKey , newState)
        return newState;
      }
      default:
        return state;
    }
}