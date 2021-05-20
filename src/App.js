// useState:コンポーネントの状態を管理できる。
import { useEffect, useState } from "react";
// import { fetchImages } from "./api";
async function fetchImages(menu) {
  const urls = [];
  let cnt = 0;
  while (cnt < 10) {
    let dupCnt = 0;
    // awaitをつけると実行が終わるまで待ってくれる
    const response = await fetch(
      `https://foodish-api.herokuapp.com/api/images/${menu}`
    )
    // console.log(response);
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
  let [urls, setUrls] = useState(null);
  useEffect(() => {

    fetchImages("pizza").then((url) => {
      urls = url;
      // console.log(url);
      setUrls(urls);
    })
  }, [])

  return (
    <div>
      <header>
        <div className="container">
          <h1>食欲を満たすサイト</h1>
        </div>
      </header>
      <main id="main">
        <div className="container cards">
          <Gallery urls={urls} />
        </div>
      </main>
      <footer id="footer">
        このサイトでは<a href="https://github.com/surhud004/Foodish#readme">Foodish API</a>を利用しています。
    </footer>
    </div>
  );

}

function Image(pic) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={pic.src} alt="food" className="pizza" />
      </div>
    </div>
  );
}
function Gallery(props) {
  // 分割代入
  const { urls } = props;
  if (urls === null) {
    return (
      <div>
        <p className="loading">
          Loading...
        </p>
      </div>
    )
  }
  return (
    urls.map((url) => {
      return (
        <div>
          <Image src={url} />
        </div>
      )
    })
  )
}


export default App;