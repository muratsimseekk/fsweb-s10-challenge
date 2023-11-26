import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { baslangicNotlariniGetir } from "../reducers";
import { s10chLocalStorageKey } from "../reducers";

const PostList = () => {
  // const notlar = [];
  const {notlar} = baslangicNotlariniGetir(s10chLocalStorageKey);
  console.log(notlar);
  const dispatch = useDispatch();

  // Tarayıcınızda daha önceden `localStorage` içerisinde Minnet Günlüğü uygulaması tarafından depolanmış veri varsa, uygulamanız bu verileri kullanarak açılmalıdır. (Bu sayede tarayıcınızı kapatmış ya da yenilemiş olsanız bile notlarınız kaybolmaz.)
  
  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
