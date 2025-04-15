import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const memes = [
    {
      id: 1,
      name: 'Blue lobster',
      image:
        'https://i.ytimg.com/vi/ywthKNqI7uI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEMgWihlMA8=&rs=AOn4CLAbn1WYwIn-XhLBzf_oSHPa--x1sQ',
      likes: 65,
    },
    {
      id: 2,
      name: 'Chill guy',
      image:
        'https://preview.redd.it/just-a-chill-guy-v0-6yjvvmbtte2e1.png?width=640&crop=smart&auto=webp&s=a2507359b8f9fec3b99711168de918202e714136',
      likes: 65,
    },
    {
      id: 3,
      name: 'RickRoll',
      image:
        'https://memeshapes.com/cdn/shop/articles/rickastley_x1600.png?v=1712534757',
      likes: 56,
    },
    {
      id: 4,
      name: 'Think, Mark!',
      image: 'https://i.ytimg.com/vi/m-I0Kbw_1hE/sddefault.jpg',
      likes: 54,
    },
    {
      id: 5,
      name: 'Pointing DiCaprio',
      image:
        'https://i.kym-cdn.com/entries/icons/original/000/033/487/rick.jpg',
      likes: 88,
    },
    {
      id: 6,
      name: 'Staring monkey',
      image:
        'https://i.pinimg.com/736x/b5/d5/c2/b5d5c2bdf2cf4d4638e3acf5f54f9f6f.jpg',
      likes: 86,
    },
    {
      id: 7,
      name: 'I am the danger',
      image: 'https://i.imgflip.com/13irh0.jpg?a484584',
      likes: 93,
    },
    {
      id: 8,
      name: 'Staring hamster',
      image:
        'https://m.media-amazon.com/images/I/31x+v5yjTiL._AC_UF1000,1000_QL80_.jpg',
      likes: 67,
    },
    {
      id: 9,
      name: 'Vergil status',
      image: 'https://i.imgflip.com/6eevww.jpg?a484152',
      likes: 72,
    },
    {
      id: 10,
      name: 'American Psycho business card',
      image:
        'https://media.tenor.com/GxA2qm-qmlkAAAAe/meme-american-psycho.png',
      likes: 66,
    },
  ];
  await prisma.meme.createMany({
    data: memes,
    skipDuplicates: true,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
