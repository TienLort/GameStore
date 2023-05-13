
import React, { useEffect, useState } from 'react';
import 'src/scss/_home.scss'

const arr = [
  {
    img: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  }
]
const FeatureGames = () => {
  const [selected, setSelected] = useState(2);
  const handleClick = (i: number) => {
    if (i != selected) {
      setSelected(i);
    }
  }

  return (
    <div className="FeatureGames">
      {
        arr.map((val, i) => (
          <div
            key={i}
            className={i === selected ? "slide active" : "slide"}
            style={{
              backgroundImage: `url(${val.img})`
            }}
            onClick={() => handleClick(i)}
          >
            <h3>Spring</h3>
          </div>
        ))
      }

    </div >
  );
}

export default FeatureGames






