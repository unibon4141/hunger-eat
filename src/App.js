// useState:コンポーネントの状態を管理できる。
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
const api_id = process.env.API.KEY;
async function fetchPizzaImages() {
  const urls = [];
  let cnt = 0;
  while (cnt < 9) {
    let dupCnt = 0;
    // awaitをつけると実行が終わるまで待ってくれる
    const response = await fetch(
      `https://foodish-api.herokuapp.com/api/images/pizza`
    )

    // jsonとして読み込む
    const data = await response.json();
    for (let i = 0; i < urls.length; i++) {
      if (urls[i] === data.image) {
        dupCnt++;
      }
    }
    if (!dupCnt) {
      cnt++;
      urls.push(data.image);
    }

  }
  return urls;
}

function App() {

  return (
    <Router>
      <div>
        <header>
          <div className="container">
            <h1>食欲を満たすサイト</h1>
          </div>
          <nav>
            <Link className="" to="/pizza">
              ピザ
        </Link>
            <Link className="" to="/ramen">
              ラーメン
        </Link>
            <Link className="" to="/steak">
              肉
        </Link>
          </nav>
        </header>
        <main id="main">
          <div className="container cards">
            {/* Swithコンポーネント：URLによって切り替わる要素の場所を設定 */}
            <Switch>
              <Route path="/" exact>
                <PizzaPage />
              </Route>
              <Route path="/ramen">
                <RamenPage />
              </Route>
              <Route path="/pizza">
                <PizzaPage />
              </Route>
              <Route path="/steak">
                <SteakPage />
              </Route>
            </Switch >
          </div>
        </main>
        <footer id="footer">
          このサイトでは<a href="https://github.com/surhud004/Foodish#readme">Foodish API</a>, <a href="https://www.flickr.com/services/api/">Flickr API</a>を利用しています。
    </footer>
      </div>
    </Router>
  );

}
function Loading() {
  return (
    <div>
      <p className="loading">
        Loading...
    </p>
    </div>
  )
};

function Image(props) {
  return (
    <div key={props.src} className="card">
      <div className="card-image">
        <img src={props.src} alt="food" className={`${props.foodType} food-item`} />
      </div>
    </div>
  );
}
function Gallery(props) {
  // 分割代入
  const { urls } = props;
  const { foodType } = props;
  if (urls === null) {
    return <Loading />
  }
  return (
    urls.map((url) => {
      return (

        <Image src={url} foodType={foodType} />

      )
    })

  )
}
async function fetchRamenImages() {
  const urls = [];
  let cnt = 0;
  // awaitをつけると実行が終わるまで待ってくれる
  const response = await fetch(
    `https://api.flickr.com/services/rest?api_key=${api_id}&method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_c,date_taken.original_format&tags=ramen&user_id=41665184%40N08`
  );

  // jsonとして読み込む
  const data = await response.json();

  data.photos.photo.map((d) => {
    urls.push(d.url_c);
  });

  return urls.slice(0, 9);
}
async function fetchSteakImages() {
  const urls = [];
  let cnt = 0;
  // awaitをつけると実行が終わるまで待ってくれる
  const response = await fetch(
    `https://api.flickr.com/services/rest?api_key=${api_id}&method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_c,date_taken&tags=wagyu&user_id=78797573%40N00`
  );
  // jsonとして読み込む
  const data = await response.json();
  data.photos.photo.map((d) => {
    urls.push(d.url_c);
  });
  return urls.slice(0, 9);
}

function RamenPage() {
  let [urls, setUrls] = useState(null);
  useEffect(() => {

    fetchRamenImages().then((url) => {
      urls = url;
      setUrls(urls);
    })
  }, [])
  return <Gallery urls={urls} foodType="ramen" />;
}

function PizzaPage() {


  let [urls, setUrls] = useState(null);
  useEffect(() => {

    fetchPizzaImages().then((url) => {
      urls = url;

      setUrls(urls);
    })
  }, [])
  return <Gallery urls={urls} foodType="pizza" />;
}

function SteakPage() {


  let [urls, setUrls] = useState(null);
  useEffect(() => {

    fetchSteakImages().then((url) => {
      urls = url;
      setUrls(urls);
    })
  }, [])
  return <Gallery urls={urls} foodType="steak" />;
}

export default App;