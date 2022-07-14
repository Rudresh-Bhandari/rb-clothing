import Directory from '../../components/directory/directory.componet'
import { Outlet } from 'react-router-dom'

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://img.freepik.com/free-photo/row-men-s-suit-jackets-hanging-closet_386094-185.jpg?w=2000"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://static.toiimg.com/photo/80482428.cms?imgsize=99038"
    }
  ]

  return (
    <div>
      <Directory categories={categories} />);
      <Outlet />
    </div>
  )
};

export default Home;