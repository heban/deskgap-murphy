import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  'Dla komputera nie ma rzeczy nie do pomyślenia, a tym bardziej nie ma rzeczy niemożliwych – z wyjątkiem tych, których od niego wymagamy.',
  'Systemy odporne na idiotów obsługiwane są właśnie przez idiotów.',
  'Stare systemy produkują stare błędy.',
  'Nowe systemy produkują tak nowe, jak i stare błędy.',
  'Wszystkie komputery PC są kompatybilne, ale niektóre są kompatybilniejsze od innych.',
  'Wszystko ulega rozkładowi w najmniej odpowiednim momencie.',
  'Rozłożenie dowolnego urządzenia na części jest proste. Ponowne jego złożenie tak, żeby działało, nie jest możliwe.',
  'Systemy złożone wykazują skłonność do popełniania kompleksowych błędów. Systemy proste wykazują zaś skłonność do popełniania elementarnych błędów.',
  'Klientowi nigdy nie przyjdzie na myśl, ile kosztuje projekt, tylko ile można na tym projekcie zaoszczędzić.',
  'Żaden klient nie wie, czego właściwie chce.',
  'Każdy klient wie dokładnie, czego nie chce.',
  'Klient, który najmniej płaci, marudzi najwięcej.',
  'Każdy program w Windows pracuje poprawnie do momentu niczym nieuzasadnionej utraty danych.',
  'Prawo programistów: Jeśli w danym produkcie wszystko działa poprawnie, to znaczy, iż nie jest on wystarczająco zaawansowany technologicznie.',
  'Nie wierz w cuda – zdaj się na nie.',
  'Każdy programista przybywający z innego miasta jest fachowcem.',
  'To, co wygląda na niemożliwe, potrafi rozwiązać nawet twoja teściowa i to bez pomocy komputera.',
  'Program, który zaczyna się źle, kończy się przerażająco.',
  'Liczba osób w zespole programistycznym ma tendencje wzrastające niezależnie od ilości pracy.',
  'Program oddany użytkownikowi w piątek wraca do autora w poniedziałek.',
];

const randomQuote = (quotes = []) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const App = () => {
  const [quote, setQuote] = useState(randomQuote(quotes));

  const getQuote = () => {
    setQuote(randomQuote(quotes));
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deskgap-murphy - Murphy, React i DeskGap! 
        </p>
        <div className="App-quotes">
          {quote}
        </div>
        <button className="App-button" onClick={getQuote}>
          Losuj cytat!
        </button>
      </header>
    </div>
  );
};

export default App;
